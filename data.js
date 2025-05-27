var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room-tour-1",
      "name": "LIVING ROOM TOUR 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen-tour-1",
      "name": "KITCHEN TOUR 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3758628576583796,
          "pitch": 0.05009845734896956,
          "rotation": 4.71238898038469,
          "target": "1-kitchen-tour-1"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-kitchen-tour-2"
        },
        {
          "yaw": -0.6673240958493825,
          "pitch": 0.28159352039488716,
          "rotation": 4.71238898038469,
          "target": "5-bedroom-tour-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-tour-2",
      "name": "KITCHEN TOUR 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8114536270216455,
          "pitch": 0.10259255067817463,
          "rotation": 1.5707963267948966,
          "target": "3-bathroom-tour-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom-tour-1",
      "name": "BATHROOM TOUR 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3290957526813294,
          "pitch": 0.09685957185349636,
          "rotation": 0,
          "target": "4-bathroom-tour-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom-tour-2",
      "name": "BATHROOM TOUR 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18749377868792116,
          "pitch": 0.09619017615912107,
          "rotation": 4.71238898038469,
          "target": "1-kitchen-tour-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-tour-1",
      "name": "BEDROOM TOUR 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4775933879114742,
          "pitch": 0.30385064614707247,
          "rotation": 4.71238898038469,
          "target": "6-balcony"
        },
        {
          "yaw": 0.37473517265984313,
          "pitch": 0.08034572861292588,
          "rotation": 1.5707963267948966,
          "target": "7-bedroom-tour-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-balcony",
      "name": "BALCONY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2904579331251895,
          "pitch": 0.11124983696339008,
          "rotation": 4.71238898038469,
          "target": "5-bedroom-tour-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-tour-2",
      "name": "BEDROOM TOUR 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3270824776085224,
          "pitch": 0.25237223399460085,
          "rotation": 7.0685834705770345,
          "target": "0-living-room-tour-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "VIRTUAL TOUR APARTMENT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
