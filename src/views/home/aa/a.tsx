import * as React from "react";
import { Table, Divider, Button, Input, Select,Popconfirm, Form  } from "antd";
import { inject } from "mobx-react";
import {createContext} from 'react/index'

interface Props {
    history?:any,
    record?:any,
    handleSave?:any,
    input?:any,
    index?:any,
    title?:any,
    dataIndex?:any,
    editable?:any,
    form?:any

}

const { Column } = Table;
const { Option, OptGroup } = Select;
const EditableContext = createContext({});


const EditableRow = ({ form, index, ...props }:any) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);


// const EditableFormRow = Form.create()(EditableRow);

// class EditableCell extends React.Component<Props> {
//   state = {
//     editing: false,
//   };

//   toggleEdit = () => {
//     const editing = !this.state.editing;
//     this.setState({ editing }, () => {
//       if (editing) {
//         // this.input.focus();
//       }
//     });
//   };

//   // save = (e:any) => {
//   //   const { record, handleSave } = this.props;
//   //   this.form.validateFields((error:any, values:any) => {
//   //     if (error && error[e.currentTarget.id]) {
//   //       return;
//   //     }
//   //     this.toggleEdit();
//   //     handleSave({ ...record, ...values });
//   //   });
//   // };

//   // renderCell = (form:any) => {
//   //   this.form = form;
//   //   const { children, dataIndex, record, title } = this.props;
//   //   const { editing } = this.state;
//   //   return editing ? (
//   //     <Form.Item style={{ margin: 0 }}>
//   //       {form.getFieldDecorator(dataIndex, {
//   //         rules: [
//   //           {
//   //             required: true,
//   //             message: `${title} is required.`,
//   //           },
//   //         ],
//   //         initialValue: record[dataIndex],
//   //       })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
//   //     </Form.Item>
//   //   ) : (
//   //     <div
//   //       className="editable-cell-value-wrap"
//   //       style={{ paddingRight: 24 }}
//   //       onClick={this.toggleEdit}
//   //     >
//   //       {children}
//   //     </div>
//   //   );
//   // };

//   // render() {
//   //   const {
//   //     editable,
//   //     dataIndex,
//   //     title,
//   //     record,
//   //     index,
//   //     handleSave,
//   //     children,
//   //     ...restProps
//   //   } = this.props;
//   //   return (
//   //     <td {...restProps}>
//   //       {editable ? (
//   //         // <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
//   //       ) : (
//   //         // children
//   //       )}
//   //     </td>
//   //   );
//   // }
// }

class EditableTable extends React.Component {
  constructor(props:any) {
    super(props); 
  }
  columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text:any, record:any) =>
        this.state.dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  state = {
    dataSource: [
      {
        key: '0',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
      },
      {
        key: '1',
        name: 'Edward King 1',
        age: '32',
        address: 'London, Park Lane no. 1',
      },
    ],
    count: 2,
  };

  handleDelete = (key:any) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = (row:any) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const { dataSource }:any = this.state;
    // const components = {
    //   body: {
    //     row: EditableFormRow,
    //     cell: EditableCell,
    //   },
    // };

    const columns = this.columns.map((col:any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record:any) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button>
        <Table
          // components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
  
}

@inject("manage")
class Mangement extends React.Component {
  state = {
    data: [
      {
        grade_id: "1",
        grade_name: "1609B",
        room_text: "1609B",
        subject_text: "New York No. 1",
        tags: ["nice", "developer"]
      }
    ]
  };

  public render() {
    const {  data} = this.state;
    return (
      <div className="layout1">
     (<EditableTable />
        1
      </div>
    );
  }

  
  //获取input值
  public Changes = (event: any) => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  //初始render渲染之前
  public componentDidMount() {
    this.getlist();
  }
    //获取班级数据
    public getlist = async () => {
      const reult = await this.props["manage"].getStudent();
      console.log(reult);
      // this.setState({ data: reult.data });
    };

}
export default Mangement;

