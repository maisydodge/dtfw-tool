import React from "react";
import { render } from "react-dom";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import DatePicker from 'react-date-picker'
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import 'semantic-ui-css/semantic.min.css';


// var defaultAttributes = {
//   webConnect: true,
//   ovrcHome: true,
//   ovrcPro: false,
//   logTimeSeries: false,
//   parentalControls: false
// }; //add if statement to booleanCheck

var dt_data= [
  {
    "_id" : "5afb1609641aafe8b4a5f209",
    "supported" : true,
    "category" : "Media",
    "brandName" : "Binary",
    "model" : "B-900-MOIP-4K-CTRL",
    "firmware" : "1.0.1.9",
    attributes : [{
      "type" : "MOIP",
      "label" : "MOIP",
      "webconnect" : true,
      "ovrcHome" : false,
      "ovrcPro" : false,
      "logTimeSeries" : false,
      "parentalControls" : false,
    }]
  },

  /* 2 */
  {
    "_id" : "5af2055864f2c21302c8c27c",
    "supported" : true,
    "category" : "Media",
    "brandName" : "Binary",
    "model" : "B-900-MOIP-4K-CTRL",
    "firmware" : "1.0.1.5",
    attributes : [{
      "type" : "MOIP",
      "label" : "MOIP",
      "webconnect" : true,
      "ovrcHome" : false,
      "ovrcPro" : false,
      "logTimeSeries" : false,
      "parentalControls" : false,
    }]
  },

  /* 3 */
  {
    "_id" : "5aec6afd51ab139ffacbbcfa",
    "supported" : true,
    "category" : "Surveillance",
    "brandName" : "Luma",
    "model" : "LUM-310-NVR-16CH",
    "firmware" : "3.4.99.180503",
    attributes : [{
      "type" : "NVR",
      "label" : "NVR",
      "ovrcHome" : true,
      "ovrcPro" : false,
      "logTimeSeries" : false,
      "parentalControls" : false,
      "webconnect" : false
    }]
  },

  /* 4 */
  {
    "_id" : "5ade00074287d3e09bf29b99",
    "supported" : true,
    "category" : "Power",
    "brandName" : "WattBox",
    "model" : "WB-900VS-IPV-18",
    "firmware" : "0.9.00",
    attributes :[{
      "type" : "WATTBOX",
      "label" : "WattBox",
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
    }]
  },

  /* 5 */
  {
    "_id" : "5ade00074287d3e09bf29b98",
    "supported" : true,
    "category" : "Power",
    "brandName" : "WattBox",
    "model" : "WB-700VS-IPV-12",
    "firmware" : "0.9.00",
    attributes : [{
      "type" : "WATTBOX",
      "label" : "WattBox",
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
    }],
  },

  /* 6 */
  {
    "_id" : "5addda97285bac42d02adef6",
    "supported" : true,
    "category" : "Networking",
    "brandName" : "OvrC",
    "model" : "OVRC-300-PRO",
    "firmware" : "CORE.4721",
    attributes : [{
      "type" : "HUB",
      "label" : "Hub",
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
    }],
  },

  /* 7 */
  {
    "_id" : "5ad8caccb9d79e6a1d1d36ca",
    "supported" : true,
    "category" : "Surveillance",
    "brandName" : "Luma",
    "model" : "LUM-510-NVR-16CH",
    "firmware" : "3.4.95.170930",
    attributes : [{
      "type" : "NVR",
      "label" : "NVR",
      "ovrcHome" : true,
      "ovrcPro" : false,
      "logTimeSeries" : false,
      "parentalControls" : false,
      "webconnect" : false
    }],
  },

  /* 8 */
  {
    "_id" : "5ad7d0ae285bac42d02adeec",
    "brandName" : "Araknis Networks",
    "category" : "Networking",
    "firmware" : "CORE.4721",
    "model" : "AN-510-RT-5L2W",
    "supported" : true,
    attributes : [{
      "type" : "ROUTER_HUB",
      "label" : "Router",
      "webconnect" : true,
      "ovrcHome" : true,
      "logTimeSeries" : true,
      "hasWireless" : false //Add column for this?
    }],
  },

  /* 9 */
  {
    "_id" : "5ad7d073285bac42d02adeeb",
    "brandName" : "Araknis Networks",
    "category" : "Networking",
    "firmware" : "CORE.4721",
    "model" : "AN-310-RT-4L2W",
    "supported" : true,
    attributes : [{
      "type" : "ROUTER_HUB",
      "label" : "Router",
      "webconnect" : true,
      "ovrcHome" : true,
      "logTimeSeries" : true,
      "hasWireless" : false
    }]
  },

  /* 10 */
  {
    "_id" : "5ad7d009285bac42d02adeea",
    "brandName" : "Araknis Networks",
    "category" : "Networking",
    "firmware" : "CORE.4721",
    "model" : "AN-110-RT-2L1W-WIFI",
    "supported" : true,
    attributes : [{
      "type" : "ROUTER_HUB",
      "label" : "Router",
      "webconnect" : true,
      "ovrcHome" : true,
      "logTimeSeries" : true,
      "hasWireless" : true
    }]
  }
];

var fw_data = [
  /* 1 */
  {
    "_id" : "5afb1609641aafe8b4a5f20a",
    "supported" : true,
    "deviceType" : "MOIP",
    "models" : [
        "B-900-MOIP-4K-CTRL"
    ],
    "firmwareVersion" : "1.0.1.9",
    "url" : "https://s3.amazonaws.com/snapav-firmware/Media/Moip/Agent/MOIP_1.0.1.9_20180514.bin",
    "filename" : "MOIP_1.0.1.9_20180514.bin",
    "filesize" : "25478798",
    "releaseDate" : Date("2018-05-14T00:00:00.000Z"),
    "releaseNotes" : "<ul>    <li>OvrC Testing</li></ul>",
    "attributes" : {},
    "prerequisites" : []
  },

  /* 2 */
  {
    "_id" : "5af2055864f2c21302c8c27d",
    "supported" : true,
    "deviceType" : "MOIP",
    "models" : [
        "B-900-MOIP-4K-CTRL"
    ],
    "firmwareVersion" : "1.0.1.5",
    "url" : "https://s3.amazonaws.com/snapav-firmware/Media/Moip/Agent/MOIP_1.0.1.5_20180430.bin",
    "filename" : "MOIP_1.0.1.5_20180430.bin",
    "filesize" : "41126345",
    "releaseDate" : Date("2018-05-01T00:00:00.000Z"),
    "releaseNotes" : "<ul>    <li>OvrC Testing</li></ul>",
    "attributes" : {},
    "prerequisites" : []
  },

  /* 3 */
  {
    "_id" : "5ace6a5fae43775d07a19703",
    "supported" : true,
    "deviceType" : "DVR",
    "models" : [
        "LUM-500-DVR-8CH",
        "LUM-500-DVR-16CH",
        "LUM-501-DVR-8CH",
        "LUM-501-DVR-16CH"
    ],
    "firmwareVersion" : "3.0.4.180322",
    "url" : "https://s3.amazonaws.com/snapav-firmware/Surveillance/DVR/DVR-8-16CH_3.0.4_180322_20180410.dav",
    "filename" : "DVR-8-16CH_3.0.4_180322_20180410.dav",
    "filesize" : "15516160",
    "releaseDate" : Date("2018-04-10T00:00:00.000Z"),
    "releaseNotes" : "<ul>    <li>P2P DVR #2</li></ul>",
    "attributes" : {},
    "prerequisites" : []
  },

  /* 4 */
  {
    "_id" : "5ace6a25ae43775d07a196fb",
    "supported" : true,
    "deviceType" : "DVR",
    "models" : [
        "LUM-500-DVR-4CH",
        "LUM-501-DVR-4CH"
    ],
    "firmwareVersion" : "3.0.4.180322",
    "url" : "https://s3.amazonaws.com/snapav-firmware/Surveillance/DVR/DVR-4CH_3.0.4_180322_20180410.dav",
    "filename" : "DVR-4CH_3.0.4_180322_20180410.dav",
    "filesize" : "12603904",
    "releaseDate" : Date("2018-04-10T00:00:00.000Z"),
    "releaseNotes" : "<ul>    <li>P2P DVR #2</li></ul>",
    "attributes" : {},
    "prerequisites" : []
  },

  /* 5 */
  {
    "_id" : "5acd0bde7356ef90f5c30c68",
    "supported" : true,
    "deviceType" : "STREAMING",
    "models" : [
        "MMS-1e",
        "MMS-3e",
        "MMS-5e"
    ],
    "firmwareVersion" : "6.1.20180328.2",
    "url" : "https://s3.amazonaws.com/snapav-firmware/Media/MMS-1e/tnv.txt",
    "filename" : "tnv.txt",
    "filesize" : "1000000",
    "releaseDate" : Date("2018-03-28T00:00:00.000Z"),
    "releaseNotes" : "<ul>    <li>Autonomic FW</li></ul>",
    "attributes" : {},
    "prerequisites" : []
  },

  /* 6 */
  {
    "_id" : "5ac689a75c3a23366c25bdf1",
    "supported" : true,
    "deviceType" : "ROUTER",
    "models" : [
        "AN-300-RT-4L2W"
    ],
    "firmwareVersion" : "1.0.5.39",
    "url" : "https://s3.amazonaws.com/snapav-firmware/Network/AN300-Router/AN-300-RT-4L2W_1.0.5.39_20180404.bin",
    "filename" : "AN-300-RT-4L2W_1.0.5.39_20180404.bin",
    "filesize" : "26730496",
    "releaseDate" : Date("2018-04-04T00:00:00.000Z"),
    "releaseNotes" : "<ul>    <li>Ovrc Firmware</li></ul>",
    "attributes" : {},
    "prerequisites" : []
  },

  /* 7 */
  {
    "_id" : "5ac511850ad2b2b88cb29ff7",
    "supported" : true,
    "deviceType" : "NVR",
    "models" : [
        "LUM-500-NVR-4CH",
        "LUM-500-NVR-8CH",
        "LUM-500-NVR-16CH",
        "LUM-501-NVR-8CH",
        "LUM-501-NVR-16CH"
    ],
    "firmwareVersion" : "3.1.2.180322",
    "url" : "https://s3.amazonaws.com/snapav-firmware/Surveillance/NVR/NVR-4-8-16CH_3.1.2_180322_20180402.mav",
    "filename" : "NVR-4-8-16CH_3.1.2_180322_20180402.mav",
    "filesize" : "28342127",
    "releaseDate" : Date("2018-04-02T00:00:00.000Z"),
    "releaseNotes" : "<ul>    <li>OvrC Testing</li></ul>",
    "attributes" : {},
    "prerequisites" : []
  },

  /* 8 */
  {
    "_id" : "5abba118dfafb0f468fa2460",
    "supported" : true,
    "deviceType" : "AMPLIFIER",
    "models" : [
        "AU-M-801e"
    ],
    "firmwareVersion" : "6.0.0b9",
    "url" : "https://s3.amazonaws.com/snapav-firmware/Audio/Autonomic/Amps/801e/Autonomic_M801e_6_0_b9.bun",
    "filename" : "Autonomic_M801e_6_0_b9.bun",
    "filesize" : "5974784",
    "releaseDate" : Date("2018-03-28T00:00:00.000Z"),
    "releaseNotes" : "<ul>    <li>OvrC Testing</li></ul>",
    "attributes" : {},
    "prerequisites" : []
  },

  /* 9 */
  {
    "_id" : "5abba118dfafb0f468fa245e",
    "supported" : true,
    "deviceType" : "AMPLIFIER",
    "models" : [
        "AU-M-401e"
    ],
    "firmwareVersion" : "6.0.0b9",
    "url" : "https://s3.amazonaws.com/snapav-firmware/Audio/Autonomic/Amps/401e/Autonomic_M401e_6_0_b9.bun",
    "filename" : "Autonomic_M401e_6_0_b9.bun",
    "filesize" : "3493984",
    "releaseDate" : Date("2018-03-28T00:00:00.000Z"),
    "releaseNotes" : "<ul>    <li>OvrC Testing</li></ul>",
    "attributes" : {},
    "prerequisites" : []
  },

  /* 10 */
  {
    "_id" : "5abba118dfafb0f468fa245c",
    "supported" : true,
    "deviceType" : "AMPLIFIER",
    "models" : [
        "AU-M-120e"
    ],
    "firmwareVersion" : "6.0.0b9",
    "url" : "https://s3.amazonaws.com/snapav-firmware/Audio/Autonomic/Amps/120e/Autonomic_M120e_6_0_b9.bun",
    "filename" : "Autonomic_M120e_6_0_b9.bun",
    "filesize" : "2113584",
    "releaseDate" : Date("2018-03-28T00:00:00.000Z"),
    "releaseNotes" : "<ul>    <li>OvrC Testing</li></ul>",
    "attributes" : {},
    "prerequisites" : []
  }
]

function booleanCheck(value){
  if (value === null){
    // use default attribute
  }
  if (value === true)
    return <i class="check circle outline icon"></i>
  else return <i class="circle outline icon" ></i>
}

// validator function pass the user input value and should return true|false.
// function jobNameValidator(value) {
//   const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
//   if (!value) {
//     response.isValid = false;
//     response.notification.type = 'error';
//     response.notification.msg = 'Value must be inserted';
//     response.notification.title = 'Requested Value';
//   } else if (value.length < 10) {
//     response.isValid = false;
//     response.notification.type = 'error';
//     response.notification.msg = 'Value must have 10+ characters';
//     response.notification.title = 'Invalid Value';
//   }
//   return response;
// }

// function jobStatusValidator(value) {
//   const nan = isNaN(parseInt(value, 10));
//   if (nan) {
//     return 'Job Status must be a integer!';
//   }
//   return true;
// }

function populateCategory() {
  let categories = []
  for (var i = 0; i < dt_data.length; i++) {
    if(categories.indexOf(dt_data[i]['category']) === -1){
      categories.push(dt_data[i]['category'])
    }
  }
  return categories
};

function populateBrand() {
  //TODO: make brands filtered based on category selection
  let brands = []
  for (var i = 0; i < dt_data.length; i++){
    if (brands.indexOf(dt_data[i]['brandName']) === -1){
      brands.push(dt_data[i]['brandName'])
    }
  }
  return brands
};

function populateModel() {
  //TODO: make models filtered based on brand selection
  let models = []
  for (var i = 0; i < dt_data.length; i++){
    if (models.indexOf(dt_data[i]['model']) === -1){
      models.push(dt_data[i]['model'])
    }
  }
  return models
};

function displaySSH(row){
  //TODO: Make work
  let sshtun = []
  if (row['sshtunnel'] !== null){
    sshtun.push(row['sshtunnel']['supports'])
    sshtun.push(row['sshtunnel']['port'])
    sshtun.push(row['sshtunnel']['protocol'])
  }
  return sshtun
};

// function calendar(row) {
//   //TODO: add handle change
//   return <DatePicker />
// };

class AttributesTable extends React.Component {
  render() {
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data } striped>
          <TableHeaderColumn dataField='type' isKey={ true }>Type</TableHeaderColumn>
          <TableHeaderColumn dataField='label'>Label</TableHeaderColumn>
          <TableHeaderColumn dataField='webconnect' dataFormat={booleanCheck}>webConnect</TableHeaderColumn>
          <TableHeaderColumn dataField='ovrcHome' dataFormat={booleanCheck} >OvrC Home</TableHeaderColumn>
          <TableHeaderColumn dataField='ovrcPro' dataFormat={booleanCheck}>OvrC Pro</TableHeaderColumn>
          <TableHeaderColumn dataField='logTimeSeries' dataFormat={booleanCheck}>Time Series</TableHeaderColumn>
          <TableHeaderColumn dataField='parentalControls' dataFormat={booleanCheck}>Parental Controls</TableHeaderColumn>
          <TableHeaderColumn dataField='SSHTunnel' dataForm={displaySSH} > SSH Tunnel</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}

class App extends React.Component {

  isExpandableRow(row) {
    return true;
  }

  expandComponent(row) {
    return (
      <AttributesTable data={row.attributes} />
    );
  }
  
  expandColumnComponent({ isExpandableRow, isExpanded }) {
    let content = '';
  
    if (isExpandableRow) {
      content = (isExpanded ? '(-)' : '(+)' );
    } else {
      content = ' ';
    }
    return (
      <div> { content } </div>
    );
  }

  render() {
    const options = {
      expandRowBgColor: 'rgb(66, 134, 244)',
      expandBy: 'column',
    };
    const keyBoardNav = {
      enterToEdit: true
    };
    const cellEditProp = {
      mode: 'click',
    };

    return (
      <div>
        <center><h2>Device Types</h2></center>
        <BootstrapTable 
          data={dt_data}
          cellEdit={ cellEditProp } 
          insertRow={ true }
          options={ options }
          striped
          expandableRow={ this.isExpandableRow }
          expandComponent={ this.expandComponent }
          expandColumnOptions={ {
          expandColumnVisible: true,
          expandColumnComponent: this.expandColumnComponent,
          columnWidth: 40 }}
          search
          pagination
          keyBoardNav = {keyBoardNav}>
            <TableHeaderColumn dataField='_id' isKey={true} hidden editable={false} width={50}>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='category' expandable={false} editable={ { type: 'select', options: { values: populateCategory } }}>Category</TableHeaderColumn>
            <TableHeaderColumn dataField='brandName' expandable={false} editable={ { type: 'select', options: {values: populateBrand } }}>Brand</TableHeaderColumn>
            <TableHeaderColumn dataField='model' expandable={false} editable={ { type: 'select', options: {values: populateModel } } }>Model</TableHeaderColumn>
            <TableHeaderColumn dataField='firmware' expandable={false} editable={ { type: 'textarea'} }>Firmware Version</TableHeaderColumn>
            <TableHeaderColumn dataField='platform' expandable={false} editable={ { type: 'textarea'} }>Platform (optional)</TableHeaderColumn>
            <TableHeaderColumn dataField='supported' expandable={false} editable={ { type: 'checkbox', options: { values: 'true:false' } } }>Supported</TableHeaderColumn>
        </BootstrapTable>
          <br/>
          <br/>
        <center><h2>Firmware Upgrades</h2></center>
        <BootstrapTable 
          data={ fw_data } 
          cellEdit={ cellEditProp } 
          insertRow={ true }
          options={ options }
          keyBoardNav = {keyBoardNav}
          striped
          search
          pagination>
            <TableHeaderColumn dataField='_id' isKey={true} hidden editable={false}>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='url' editable={ { type: 'textarea' } } tdStyle={ { whiteSpace: 'normal' } } width={250}>URL</TableHeaderColumn>
            <TableHeaderColumn dataField='filesize' editable={ { type: 'textarea' }} width={100}>File Size</TableHeaderColumn>
            <TableHeaderColumn dataField='releaseDate' editable={ { type: 'textarea' } } width={140}>Release Date</TableHeaderColumn>
            <TableHeaderColumn dataField='releaseNotes' editable={ { type: 'textarea'} } tdStyle={ { whiteSpace: 'normal' } }>Release Notes</TableHeaderColumn>
            <TableHeaderColumn dataField='tftpStatus' editable={ { type: 'textarea'} }>TFTP Status (optional)</TableHeaderColumn>
            <TableHeaderColumn dataField='tftpURL' editable={ { type: 'textarea' } }>TFTP URL</TableHeaderColumn>
            <TableHeaderColumn dataField='models' editable={false} tdStyle={ { whiteSpace: 'normal' } }>Models</TableHeaderColumn>
        </BootstrapTable> <br/> <br/> </div>
    );
  }
}
render(<App />, document.getElementById("root"));