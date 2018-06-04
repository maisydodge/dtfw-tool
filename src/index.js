import React from "react";
import { render } from "react-dom";
import { makeData} from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import { Dropdown } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'
import { Form, TextArea } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';

import PropTypes from 'prop-types';

// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';

var defaultAttributes = {
  webConnect: true,
  ovrcHome: true,
  ovrcPro: false,
  logTimeSeries: false,
  parentalControls: false
};
// var catalog = {
//   "Audio": {
//       "Episode": {
//           "AMPLIFIER": {
//               label: "Amplifier",
//               models: [
//                   "ESA-70V2CH-150W",
//                   "ESA-70V2CH-300W",
//                   "ESA-70V2CH-500W"
//               ]
//           }
//       },
//       "Autonomic": {
//           "AMPLIFIER": {
//               label: "Amplifier",
//               models: [
//                   "M-120e",
//                   "M-401e",
//                   "M-801e"
//               ]
//           }
//       }
//   },
//   "Control System": {
//       "URC": {
//           "URC": {
//               label: "URC",
//               models: [
//                   "MRX-8",
//                   "MRX-10",
//                   "MRX-10N",
//                   "MRX-20",
//                   "",
//                   "CP-1",
//                   "CP-2"
//               ]
//           }
//       },
//       "Control4": {
//           "CONTROL4": {
//               label: "Control4",
//               models: [
//                   "EA1",
//                   "EA3",
//                   "EA5",
//                   "",
//                   "HC250",
//                   "HC800"
//               ]
//           }
//       }
//   },
//   "Media": {
//       "Binary": {
//           "MOIP": {
//               label: "MOIP",
//               overrideAttributes: {
//                   ovrcHome: false
//               },
//               models: [
//                   "B-900-AGENT",
//                   "B-900-DEC-RS",
//                   "B-900-ENC-RS",
//                   "",
//                   "MOIP-100-DIR"
//               ]
//           }
//       },
//       "Pioneer": {
//           "PIONEER": {
//               label: "Pioneer",
//               models: [
//                   "SC-LX101",
//                   "SC-LX301",
//                   "SC-LX501",
//                   "SC-LX701",
//                   "SX-LX801",
//                   "SX-LX901",
//                   "",
//                   "VSX-831",
//                   "VSX-1131"
//               ]
//           }
//       },
//       "Autonomic": {
//           "STREAMING": {
//               label: "Media Streaming Server",
//               models: [
//                       "MMS-1e"
//               ]
//           }
//       }
//   },
//   "Networking": {
//       "Araknis Networks": {
//           "WAP": {
//               label: "Access Point",
//               overrideAttributes: {
//                   logTimeSeries: true,
//                   parentalControls: true
//               },
//               models: [
//                   "AN100",
//                   "AN300",
//                   "",
//                   "AN-100-AP-I-N",
//                   "AN-300-AP-I-N",
//                   "AN-700-AP-I-N",
//                   "AN-100-AP-I-N-BETA",
//                   "AN-300-AP-I-N-BETA",
//                   "",
//                   "AN-500-AP-I-AC",
//                   "AN-700-AP-I-AC",
//                   "AN-700-AP-O-AC",
//                   "AN-500-AP-I-AC-BETA",
//                   "AN-700-AP-I-AC-BETA"
//               ]
//           },
//           "ROUTER": {
//               label: "Router",
//               models: [
//                   "AN-300-RT-4L2W",
//                   "AN-300-RT-4L2W-BETA"
//               ]
//           },
//           "SWITCH": {
//               label: "Switch",
//               overrideAttributes: {
//                   logTimeSeries: true
//               },
//               models: [
//                   "AN-110-SW-5",
//                   "AN-110-SW-8",
//                   "AN-110-SW-16",
//                   "AN-110-SW-24",
//                   "",
//                   "AN-210-SW-8-POE",
//                   "AN-210-SW-16-POE",
//                   "AN-210-SW-24-POE",
//                   "AN-210-SW-48-POE",
//                   "",
//                   "AN-300-SW-8",
//                   "AN-300-SW-16",
//                   "AN-300-SW-24",
//                   "",
//                   "AN-300-SW-8-POE",                            
//                   "AN-300-SW-16-POE",
//                   "AN-300-SW-24-POE",
//                   "",
//                   "AN-300-SW-F-24",
//                   "AN-300-SW-R-24",
//                   "",
//                   "AN-310-SW-8",
//                   "AN-310-SW-16",
//                   "AN-310-SW-24",
//                   "AN-310-SW-48",
//                   "",
//                   "AN-310-SW-8-POE",
//                   "AN-310-SW-16-POE",
//                   "AN-310-SW-24-POE"                            
//               ]
//           }
//       },
//       "OvrC": {
//           "HUB": {
//               label: "Hub",
//               ovrcPro: true,
//               overrideAttributes: {
//                   logTimeSeries: true,
//                   ovrcHome: false,
//                   ovrcPro: true
//               },
//               models: [
//                   "HUB",
//                   "OVRC-100-HUB"
//               ]
//           }
//       }
//   },
//   "Power": {
//       "WattBox": {
//           "WATTBOX": {
//               label: "WattBox",
//               models: [
//                   "WB-200-IPCE-3",
//                   "WB-200VB-IPCE-6",
//                   "",
//                   "WB-300-IP-3",
//                   "WB-300VB-IP-5",
//                   "",
//                   "WB-400-IPCE-8",
//                   "",
//                   "WB-500-IP-8",
//                   "",
//                   "WB-600-IPVCE-12",
//                   "WB-600CH-IPVCE-12",
//                   "",
//                   "WB-700-IPV-12",
//                   "WB-700CH-IPV-12"
//               ]
//           }
//       }
//   },
//   "Surveillance": {
//       "Luma": {
//           "NVR": {
//               label: "NVR",
//               overrideAttributes: {
//                   webConnect: false
//               },
//               models: [
//                   "LUM-500-NVR-4CH",
//                   "LUM-500-NVR-8CH",
//                   "LUM-500-NVR-16CH",
//                   "",
//                   "LUM-501-NVR-8CH",
//                   "LUM-501-NVR-16CH"
//               ]
//           },
//           "DVR": {
//               label: "DVR",
//               models: [
//                   "LUM-500-DVR-4CH",
//                   "LUM-500-DVR-8CH",
//                   "LUM-500-DVR-16CH",
//                   "",
//                   "LUM-501-DVR-4CH",
//                   "LUM-501-DVR-8CH",
//                   "LUM-501-DVR-16CH"
//               ]
//           },
//           "CAMERA": {
//               label: "Camera",
//               overrideAttributes: {
//                   webConnect: false
//               },
//               models: [
//                   "LUM-300-BUL-IP-GR",
//                   "LUM-300-BUL-IP-WH",
//                   "LUM-300-CUB-IPW-WH",
//                   "LUM-300-DOM-IP-BL",
//                   "LUM-300-DOM-IP-WH",
//                   "LUM-500-BUL-IP-GR",
//                   "LUM-500-BUL-IP-WH",
//                   "LUM-500-DOM-IP-BL",
//                   "LUM-500-DOM-IP-WH",
//                   "LUM-500-TUR-IP-BL",
//                   "LUM-500-TUR-IP-WH",
//                   "LUM-700-BUL-IPH-GR",
//                   "LUM-700-BUL-IPH-WH",
//                   "LUM-700-DOM-IPH-BL",
//                   "LUM-700-DOM-IPH-WH"
//               ]
//           }
//       },
//       "Wirepath Surveillance": {
//           "DVR": {
//               label: "DVR",
//               models: [
//                   "WPS-500-DVR-4CH",
//                   "WPS-500-DVR-8CH",
//                   "WPS-500-DVR-16CH"
//               ]
//           },
//           "CAMERA": {
//               label: "Camera",
//               models: [
//                   "WPS-300-BUL-IP-(WH/GR)",
//                   "WPS-300-CUB-IP-WH",
//                   "WPS-300-DOM-IP-(BL/WH)",
//                   "WPS-500-PTZ-IP-WH",
//                   "WPS-550-BUL-IP-(WH/GR)",
//                   "WPS-550-DOM-IP-(BL/WH)",
//                   "WPS-750-BUL-IP-(WH/GR)",
//                   "WPS-750-BUL-IPH-(WH/GR)",
//                   "WPS-750-DOM-IP-(BL/WH)",
//                   "WPS-750-DOM-IPH-(BL/WH)"
//               ]
//           }
//       }
//   }
// };

var categories = [
  {
    text: 'Audio',
    value: 'Audio'
  },
  {
    text: 'Control System',
    value: 'Control System',
  },
  {
    text: 'Media',
    value: 'Media',
  },
  {
    text: 'Networking',
    value: 'Networking',
  },
  {
    text: 'Power',
    value: 'Power',
  },
  {
    text: 'Surveillance',
    value: 'Surveillance',
  }
]

var brands = [
  {
    text: 'test1',
    value: 'test1',
  },
  {
    text: 'test2',
    value: 'test2',
  }
]

var models = [
  {
    text: 'test1',
    value: 'test1',
  },
  {
    text: 'test2',
    value: 'test2',
  }
]

// const CategorySelection = () => (
//   <Dropdown id='categories' placeholder='Category' fluid selection options={categories} onchange={populateBrands} />
// )

const BrandSelection = () => (
  <Dropdown placeholder='Brand' fluid selection options={brands} />
)

const ModelSelection = () => (
  <Dropdown placeholder='Model' fluid selection options={models} />
)

const SupportedCheckbox = () => (
  <Checkbox/>
)

const FirmwareBox = () => (
  <Form>
    <TextArea rows={1}/>
  </Form>
)

const PlatformBox = () => (
  <Form>
    <TextArea rows={1}/>
  </Form>
)

const URLBox = () => (
  <Form>
    <TextArea rows={1}/>
  </Form>
)

const FilesizeBox = () => (
  <Form>
    <TextArea rows={1}/>
  </Form>
)

const ReleaseDateBox = () => (
  <Form>
    <TextArea rows={1}/>
  </Form>
)

const ReleaseNotesBox = () => (
  <Form>
    <TextArea rows={1}/>
  </Form>
)

const TFTPStatusBox = () => (
  <Form>
    <TextArea rows={1}/>
  </Form>
)

const TFTPURLBox = () => (
  <Form>
    <TextArea rows={1}/>
  </Form>
)

const AddButton = () => (
  <Button icon='add' />
)

const EditButton = () => (
  <Button fluid onclick={EditRow}>Edit</Button>
)

var booleanFormatter = function(cell, row){
  return JSON.stringify(cell)
}

class EditRow extends React.Component{
	constructor(props) {
		super(props);
		this.editItem = this.editItem.bind(this);
	}
	editItem(){
		alert("edit " + this.props.rowData.name);
		console.log(this.props.rowData, this.props.tdData);
	}
	render () {
		return (	
			<td >	
				<input type="button" className="btn btn-warning" value="Edit" onClick={this.editItem}/>
			</td>
		);
	}
}

// function PopulateDropDownList() {
//   //Build an array containing Customer records.
//   var deviceTypes = [
//   ];
  
//    var categories = document.getElementById("categories");
  
//    //Add the Options to the DropDownList.
//    for (var i = 0; i < deviceTypes.length; i++) {
//        var option = document.createElement("OPTION");

//        //Set Customer Name in Text part.
//        option.innerHTML = deviceTypes[i].category;

//        //Set CustomerId in Value part.
//        option.value = deviceTypes[i].category;

//        //Add the Option element to DropDownList.
//        categories.options.add(option);
//    }
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const data= [
      {
        "_id" : "5afb1609641aafe8b4a5f209",
        "supported" : true,
        "category" : "Media",
        "brandName" : "Binary",
        "type" : "MOIP",
        "label" : "MOIP",
        "model" : "B-900-MOIP-4K-CTRL",
        "firmware" : "1.0.1.9",
        "attributes" : {
            "webConnect" : true,
            "ovrcHome" : false,
            "ovrcPro" : false,
            "logTimeSeries" : false,
            "parentalControls" : false,
            "webconnect" : true
        },
        "ovrcPro" : false,
        "ovrcHome" : false,
        "logTimeSeries" : false
      },
    
      /* 2 */
      {
        "_id" : "5af2055864f2c21302c8c27c",
        "supported" : true,
        "category" : "Media",
        "brandName" : "Binary",
        "type" : "MOIP",
        "label" : "MOIP",
        "model" : "B-900-MOIP-4K-CTRL",
        "firmware" : "1.0.1.5",
        "attributes" : {
            "webConnect" : true,
            "ovrcHome" : false,
            "ovrcPro" : false,
            "logTimeSeries" : false,
            "parentalControls" : false,
            "webconnect" : true
        },
        "ovrcPro" : false,
        "ovrcHome" : false,
        "logTimeSeries" : false
      },
    
      /* 3 */
      {
        "_id" : "5aec6afd51ab139ffacbbcfa",
        "supported" : true,
        "category" : "Surveillance",
        "brandName" : "Luma",
        "type" : "NVR",
        "label" : "NVR",
        "model" : "LUM-310-NVR-16CH",
        "firmware" : "3.4.99.180503",
        "attributes" : {
            "webConnect" : false,
            "ovrcHome" : true,
            "ovrcPro" : false,
            "logTimeSeries" : false,
            "parentalControls" : false,
            "webconnect" : false
        },
        "ovrcPro" : false,
        "ovrcHome" : true,
        "logTimeSeries" : false
      },
    
      /* 4 */
      {
        "_id" : "5ade00074287d3e09bf29b99",
        "supported" : true,
        "category" : "Power",
        "brandName" : "WattBox",
        "type" : "WATTBOX",
        "label" : "WattBox",
        "model" : "WB-900VS-IPV-18",
        "firmware" : "0.9.00",
        "attributes" : {
            "webConnect" : true,
            "ovrcHome" : true,
            "ovrcPro" : false,
            "logTimeSeries" : false,
            "parentalControls" : false,
            "webconnect" : true,
            "sshtunnel" : {
                "supports" : true,
                "port" : 80.0,
                "protocol" : "HTTP"
            }
        },
        "ovrcPro" : false,
        "ovrcHome" : true,
        "logTimeSeries" : false
      },
    
      /* 5 */
      {
        "_id" : "5ade00074287d3e09bf29b98",
        "supported" : true,
        "category" : "Power",
        "brandName" : "WattBox",
        "type" : "WATTBOX",
        "label" : "WattBox",
        "model" : "WB-700VS-IPV-12",
        "firmware" : "0.9.00",
        "attributes" : {
            "webConnect" : true,
            "ovrcHome" : true,
            "ovrcPro" : false,
            "logTimeSeries" : false,
            "parentalControls" : false,
            "webconnect" : true,
            "sshtunnel" : {
                "supports" : true,
                "port" : 80.0,
                "protocol" : "HTTP"
            }
        },
        "ovrcPro" : false,
        "ovrcHome" : true,
        "logTimeSeries" : false
      },
    
      /* 6 */
      {
        "_id" : "5addda97285bac42d02adef6",
        "supported" : true,
        "category" : "Networking",
        "brandName" : "OvrC",
        "type" : "HUB",
        "label" : "Hub",
        "model" : "OVRC-300-PRO",
        "firmware" : "CORE.4721",
        "attributes" : {
            "webConnect" : true,
            "ovrcHome" : false,
            "ovrcPro" : true,
            "logTimeSeries" : true,
            "parentalControls" : false,
            "webconnect" : true,
            "sshtunnel" : {
                "supports" : true,
                "port" : 80.0,
                "protocol" : "HTTP"
            }
        },
        "ovrcPro" : true,
        "ovrcHome" : false,
        "logTimeSeries" : true
      },
    
      /* 7 */
      {
        "_id" : "5ad8caccb9d79e6a1d1d36ca",
        "supported" : true,
        "category" : "Surveillance",
        "brandName" : "Luma",
        "type" : "NVR",
        "label" : "NVR",
        "model" : "LUM-510-NVR-16CH",
        "firmware" : "3.4.95.170930",
        "attributes" : {
            "webConnect" : false,
            "ovrcHome" : true,
            "ovrcPro" : false,
            "logTimeSeries" : false,
            "parentalControls" : false,
            "webconnect" : false
        },
        "ovrcPro" : false,
        "ovrcHome" : true,
        "logTimeSeries" : false
      },
    
      /* 8 */
      {
        "_id" : "5ad7d0ae285bac42d02adeec",
        "attributes" : {
            "webconnect" : true,
            "hasWireless" : false
        },
        "brandName" : "Araknis Networks",
        "category" : "Networking",
        "firmware" : "CORE.4721",
        "label" : "Router",
        "model" : "AN-510-RT-5L2W",
        "supported" : true,
        "type" : "ROUTER_HUB",
        "ovrcHome" : true,
        "logTimeSeries" : true
      },
    
      /* 9 */
      {
        "_id" : "5ad7d073285bac42d02adeeb",
        "attributes" : {
            "webconnect" : true,
            "hasWireless" : false
        },
        "brandName" : "Araknis Networks",
        "category" : "Networking",
        "firmware" : "CORE.4721",
        "label" : "Router",
        "model" : "AN-310-RT-4L2W",
        "supported" : true,
        "type" : "ROUTER_HUB",
        "ovrcHome" : true,
        "logTimeSeries" : true
      },
    
      /* 10 */
      {
        "_id" : "5ad7d009285bac42d02adeea",
        "attributes" : {
            "webconnect" : true,
            "hasWireless" : true
        },
        "brandName" : "Araknis Networks",
        "category" : "Networking",
        "firmware" : "CORE.4721",
        "label" : "Router",
        "model" : "AN-110-RT-2L1W-WIFI",
        "supported" : true,
        "type" : "ROUTER_HUB",
        "ovrcHome" : true,
        "logTimeSeries" : true
      }
    ];
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: 'Device Types',
                      headerStyle: {fontWeight: 'bold', fontSize: 18},
              columns:[
                {
                  Header: 'Category',
                  accessor: 'category',
                  // Cell: CategorySelection,
                  //       style: {overflow: 'visible'}
                  //Cell: <select id='categories'> </select>
                },
                {
                  Header: 'Brand',
                  accessor: 'brandName',
                  // Cell: BrandSelection,
                  //       style: {overflow: 'visible'}
                },
                {
                  Header: 'Model',
                  accessor: 'model',
                  // Cell: ModelSelection,
                  //       style: {overflow: 'visible'}
                },
                {
                  Header: 'Firmware Version',
                  accessor: 'firmware',
                  //Cell: FirmwareBox
                },
                {
                  Header: 'Platform (optional)',
                  accessor: 'platform',
                  //Cell: PlatformBox
                },
                {
                  Header: 'Supported',
                  accessor: 'supported',
                  // Cell: SupportedCheckbox,
                  //       style: {textAlign: "center"}
                  Cell: booleanFormatter
                },
                {
                  Header: 'Type',
                  accessor: 'type'
                },
                {
                  Header: 'Label',
                  accessor: 'label'
                },
                {
                  Header: 'WebConnect',
                  accessor: 'attributes.webconnect',
                  Cell: booleanFormatter,
                  maxWidth: 40
                },
                {
                  Header: 'Ovrc Home',
                  accessor: 'attributes.ovrcHome',
                  Cell: booleanFormatter,
                  maxWidth: 40
                },
                {
                  Header: 'OvrC Pro',
                  accessor: 'attributes.ovrcPro',
                  Cell: booleanFormatter,
                  maxWidth: 40
                },
                {
                  Header: 'Time Series',
                  accessor: 'attributes.timeSeries',
                  Cell: booleanFormatter,
                  maxWidth: 40
                },
                {
                  Header: 'Parental Controls',
                  accessor: 'attributes.parentalControls',
                  Cell: booleanFormatter,
                  maxWidth: 40
                }
              ]},
                {
                  Header: 'SSH Tunnel',
                  columns:[
                    {
                      Header: 'Supported',
                      accessor: 'sshtunnel.supports',
                      Cell: booleanFormatter,
                      maxWidth: 40
                    },
                    {
                      Header: 'Port',
                      accessor: 'attributes.sshtunnel.port',
                      maxWidth: 40
                    },
                    {
                      Header: 'Protocol',
                      accessor: 'attributes.sshtunnel.protocol',
                      maxWidth: 50
                    }]
                },
                {
                  Header: '',
                  accessor: 'edit',
                  Cell: EditButton
                }

          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
        <br/>
        <center><button id="addBtn" >Add Device Type</button></center>        
        <br/>
        <br/>
        <br/>
        <ReactTable
          data={data}
          columns={[
            {
              Header: 'Firmware Upgrades',
                      headerStyle: {fontWeight: 'bold', fontSize: 18},
              columns:[
                {
                  Header: 'URL',
                  accessor: 'url',
                  Cell: URLBox
                },
                {
                  Header: 'File Size',
                  accessor: 'fileSize',
                  Cell: FilesizeBox,
                  maxWidth: 100
                },
                {
                  Header: 'Release Date',
                  accessor: 'releaseDate',
                  Cell: ReleaseDateBox, 
                  maxWidth: 150
                },
                {
                  Header: 'Release Notes',
                  accessor: 'releaseNotes',
                  Cell: ReleaseNotesBox
                },
                {
                  Header: 'TFTP Status (optional)',
                  accessor: 'tftpStatus',
                  Cell: TFTPStatusBox
                },
                {
                  Header: 'TFTP URL (optional)',
                  accessor: 'tftpURL',
                  Cell: TFTPURLBox
                },
                {
                  Header: '',
                  accessor: 'edit',
                  Cell: EditButton,
                  maxWidth: 100
                }
              ]
            }
          ]}
          defaultPageSize={1}
          className="-striped -highlight"
        />
        <br/>
        <center><button id="addBtn" >Add Firmware Upgrade</button></center>
        <br/>
        <br/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
