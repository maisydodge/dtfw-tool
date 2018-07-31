/*------ Catalog --------*/
export default {
  Audio: {
    /*"Episode": {
            "AMPLIFIER": {
                label: "Amplifier",
                models: [
                    "ESA-70V2CH-150W",
                    "ESA-70V2CH-300W",
                    "ESA-70V2CH-500W"
                ]
            }
        },*/
    Autonomic: {
      AMPLIFIER: {
        label: "Amplifier",
        overrideAttributes: { sshtunnel: { supports: true, port: 80.0, protocol: "HTTP" } },
        models: ["AU-M-120e", "AU-M-401e", "AU-M-801e"]
      }
    }
  },
  /*"Control System": {
        "URC": {
            "URC": {
                label: "URC",
                models: [
                    "MRX-8",
                    "MRX-10",
                    "MRX-10N",
                    "MRX-20",
                    "",
                    "CP-1",
                    "CP-2"
                ]
            }
        },
        "Control4": {
            "CONTROL4": {
                label: "Control4",
                models: [
                    "EA1",
                    "EA3",
                    "EA5",
                    "",
                    "HC250",
                    "HC800"
                ]
            }
        }
    },*/
  Media: {
    Binary: {
      MOIP: {
        label: "MOIP",
        overrideAttributes: {
          ovrcHome: false
        },
        models: [
          "B-900-MOIP-4K-CTRL",
          "",
          "B-900-AGENT",
          "B-900-DEC-RS",
          "B-900-ENC-RS",
          "",
          "MOIP-100-DIR"
        ]
      }
    },
    /*"Pioneer": {
            "PIONEER": {
                label: "Pioneer",
                models: [
                    "SC-LX101",
                    "SC-LX301",
                    "SC-LX501",
                    "SC-LX701",
                    "SX-LX801",
                    "SX-LX901",
                    "",
                    "VSX-831",
                    "VSX-1131"
                ]
            }
        },*/
    Autonomic: {
      STREAMING: {
        label: "Media Streaming Server",
        overrideAttributes: {
          sshtunnel: {
            supports: true,
            port: 80.0,
            protocol: "HTTP"
          }
        },
        models: ["MMS-1e", "MMS-3e", "MMS-5e"]
      }
    }
  },
  Networking: {
    "Araknis Networks": {
      WAP: {
        label: "Access Point",
        overrideAttributes: {
          logTimeSeries: true,
          parentalControls: true
        },
        models: [
          "AN100",
          "AN300",
          "",
          "AN-100-AP-I-N",
          "AN-300-AP-I-N",
          "AN-700-AP-I-N",
          "AN-100-AP-I-N-BETA",
          "AN-300-AP-I-N-BETA",
          "",
          "AN-500-AP-I-AC",
          "AN-700-AP-I-AC",
          "AN-700-AP-O-AC",
          "AN-500-AP-I-AC-BETA",
          "AN-700-AP-I-AC-BETA"
        ]
      },
      ROUTER: {
        label: "Router",
        models: ["AN-300-RT-4L2W", "AN-300-RT-4L2W-BETA"]
      },
      SWITCH: {
        label: "Switch",
        overrideAttributes: {
          logTimeSeries: true
        },
        models: [
          "AN-110-SW-5",
          "AN-110-SW-8",
          "AN-110-SW-16",
          "AN-110-SW-24",
          "",
          "AN-210-SW-8-POE",
          "AN-210-SW-16-POE",
          "AN-210-SW-24-POE",
          "AN-210-SW-48-POE",
          "",
          "AN-300-SW-8",
          "AN-300-SW-16",
          "AN-300-SW-24",
          "",
          "AN-300-SW-8-POE",
          "AN-300-SW-16-POE",
          "AN-300-SW-24-POE",
          "",
          "AN-300-SW-F-24",
          "AN-300-SW-R-24",
          "",
          "AN-310-SW-8",
          "AN-310-SW-16",
          "AN-310-SW-24",
          "AN-310-SW-48",
          "",
          "AN-310-SW-8-POE",
          "AN-310-SW-16-POE",
          "AN-310-SW-24-POE"
        ]
      }
    },
    OvrC: {
      HUB: {
        label: "Hub",
        ovrcPro: true,
        overrideAttributes: {
          logTimeSeries: true,
          ovrcHome: false,
          ovrcPro: true,
          sshtunnel: {
            supports: true,
            port: 80.0,
            protocol: "HTTP"
          }
        },
        models: ["HUB", "OVRC-100-HUB", "OVRC-300-HUB"]
      }
    }
  },
  Power: {
    WattBox: {
      WATTBOX: {
        label: "WattBox",
        overrideAttributes: { sshtunnel: { supports: true, port: 80.0, protocol: "HTTP" } },
        models: [
          "WB-800VS-IPVM-12",
          "WB-800VS-IPVM-18"
          /*"WB-200-IPCE-3",
                    "WB-200VB-IPCE-6",
                    "",
                    "WB-300-IP-3",
                    "WB-300VB-IP-5",
                    "",
                    "WB-400-IPCE-8",
                    "",
                    "WB-500-IP-8",
                    "",
                    "WB-600-IPVCE-12",
                    "WB-600CH-IPVCE-12",
                    "",
                    "WB-700-IPV-12",
                    "WB-700CH-IPV-12"*/
        ]
      }
    }
  },
  Surveillance: {
    Luma: {
      NVR: {
        label: "NVR",
        overrideAttributes: {
          webConnect: false
        },
        models: [
          "LUM-500-NVR-4CH",
          "LUM-500-NVR-8CH",
          "LUM-500-NVR-16CH",
          "",
          "LUM-501-NVR-8CH",
          "LUM-501-NVR-16CH",
          "",
          "LUM-510-NVR-4CH",
          "LUM-510-NVR-8CH",
          "LUM-510-NVR-16CH"
        ]
      },
      DVR: {
        label: "DVR",
        models: [
          "LUM-500-DVR-4CH",
          "LUM-500-DVR-8CH",
          "LUM-500-DVR-16CH",
          "",
          "LUM-501-DVR-4CH",
          "LUM-501-DVR-8CH",
          "LUM-501-DVR-16CH"
        ]
      },
      CAMERA: {
        label: "Camera",
        overrideAttributes: {
          webConnect: false
        },
        models: [
          "LUM-300-BUL-IP-GR",
          "LUM-300-BUL-IP-WH",
          "LUM-300-CUB-IPW-WH",
          "LUM-300-DOM-IP-BL",
          "LUM-300-DOM-IP-WH",
          "",
          "LUM-500-BUL-IP-GR",
          "LUM-500-BUL-IP-WH",
          "LUM-500-DOM-IP-BL",
          "LUM-500-DOM-IP-WH",
          "LUM-500-TUR-IP-BL",
          "LUM-500-TUR-IP-WH",
          "",
          "LUM-700-BUL-IPH-GR",
          "LUM-700-BUL-IPH-WH",
          "LUM-700-DOM-IPH-BL",
          "LUM-700-DOM-IPH-WH"
        ]
      }
    },
    "Wirepath Surveillance": {
      DVR: {
        label: "DVR",
        models: ["WPS-500-DVR-4CH", "WPS-500-DVR-8CH", "WPS-500-DVR-16CH"]
      },
      CAMERA: {
        label: "Camera",
        models: [
          "WPS-300-BUL-IP-(WH/GR)",
          "WPS-300-CUB-IP-WH",
          "WPS-300-DOM-IP-(BL/WH)",
          "WPS-500-PTZ-IP-WH",
          "WPS-550-BUL-IP-(WH/GR)",
          "WPS-550-DOM-IP-(BL/WH)",
          "WPS-750-BUL-IP-(WH/GR)",
          "WPS-750-BUL-IPH-(WH/GR)",
          "WPS-750-DOM-IP-(BL/WH)",
          "WPS-750-DOM-IPH-(BL/WH)"
        ]
      }
    }
  }
};
