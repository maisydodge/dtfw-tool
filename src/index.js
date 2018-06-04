import React from "react";
import { render } from "react-dom";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";

var dt_data= [
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
];

const cellEditProp = {
  mode: 'click',
  blurToSave: true
};

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

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    if (i < 3) {
      products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + i,
        expand: [ {
          fieldA: 'test1',
          fieldB: (i + 1) * 99,
          fieldC: (i + 1) * Math.random() * 100,
          fieldD: '123eedd' + i
        }, {
          fieldA: 'test2',
          fieldB: i * 99,
          fieldC: i * Math.random() * 100,
          fieldD: '123eedd' + i
        } ]
      });
    } else {
      products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + i
      });
    }
  }
}
addProducts(5);

class BSTable extends React.Component {
  render() {
      return (
        <BootstrapTable data={ this.props.data }>
          <TableHeaderColumn dataField='type' isKey={ true }>Type</TableHeaderColumn>
          <TableHeaderColumn dataField='label'>Label</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldC'>Field C</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldD'>Field D</TableHeaderColumn>
        </BootstrapTable>);
  }
}

class App extends React.Component {
  
  expandComponent(row) {
    return (
      <BSTable data={ row.expand } />
    );
  };
  
  expandColumnComponent({ isExpandableRow, isExpanded }) {
    return (
      <div> { isExpanded ? '(-)' : '(+)'  } </div>
    );
  }

  render() {
    const options = {
      expandRowBgColor: 'rgb(242, 255, 163)'
    };
    return (
      <div>
        <center><h2>Device Types</h2></center>
        <BootstrapTable 
          data={ dt_data } 
          cellEdit={ cellEditProp } 
          insertRow={ true }
          options={ options }
          striped
          expandComponent={ this.expandComponent }
          expandColumnOptions={ {
            expandColumnVisible: true,
            expandColumnComponent: this.expandColumnComponent,
            columnWidth: 50
          } }
          search
          pagination>
            <TableHeaderColumn dataField='category' isKey={true} editable={ { type: 'select', options: {} } }>Category</TableHeaderColumn>
            <TableHeaderColumn dataField='brandName' editable={ { type: 'select', options: {values:{} } }}>Brand</TableHeaderColumn>
            <TableHeaderColumn dataField='model' editable={ { type: 'select', options: {values: {} } } }>Model</TableHeaderColumn>
            <TableHeaderColumn dataField='firmware' editable={ { type: 'textarea'} }>Firmware Version</TableHeaderColumn>
            <TableHeaderColumn dataField='platform' editable={ { type: 'textarea'} }>Platform (optional)</TableHeaderColumn>
            <TableHeaderColumn dataField='supported' editable={ { type: 'checkbox', options: { values: 'true:false' } } }>Supported</TableHeaderColumn>
        </BootstrapTable>
          <br/>
          <br/>
        <center><h2>Firmware Upgrades</h2></center>
        <BootstrapTable 
          data={ fw_data } 
          cellEdit={ cellEditProp } 
          insertRow={ true }
          options={ options }
          striped
          expandComponent={ this.expandComponent }
          expandColumnOptions={ {
            expandColumnVisible: true,
            expandColumnComponent: this.expandColumnComponent,
            columnWidth: 50
          } }
          search
          pagination>
            <TableHeaderColumn dataField='url' isKey={true} editable={ { type: 'textarea' } }>URL</TableHeaderColumn>
            <TableHeaderColumn dataField='filesize' editable={ { type: 'textarea' }}>File Size</TableHeaderColumn>
            <TableHeaderColumn dataField='releaseDate' editable={ { type: 'textarea' } }>Release Date</TableHeaderColumn>
            <TableHeaderColumn dataField='releaseNotes' editable={ { type: 'textarea'} }>Release Notes</TableHeaderColumn>
            <TableHeaderColumn dataField='tftpStatus' editable={ { type: 'textarea'} }>TFTP Status (optional)</TableHeaderColumn>
            <TableHeaderColumn dataField='tftpURL' editable={ { type: 'textarea' } }>TFTP URL</TableHeaderColumn>
        </BootstrapTable> <br/> <br/> </div>
    );
  }
}
render(<App />, document.getElementById("root"));
