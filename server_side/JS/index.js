window.onload = function () {
  // Function to create and display the lower 48 states of the usa map
  zingchart.loadModules('maps, maps-usa', function (e) {
    const usa_map_config = {
      backgroundColor: 'none', // This is in the root
      plotarea: {
        backgroundColor: 'transparent',
        margin: 'dynamic',
        hoverState: {
          backgroundColor: 'blue'
        },
      },
      shapes: [{
        type: 'zingchart.maps',
        options: {
          name: 'usa',
          ignore: ['AK', 'HI'],
          style: {
            controls: {
              visible: false
            },
            cursor: 'pointer',
            hoverState: {
              backgroundColor: 'blue',
              fontColor: '#F5F5F5',
              alpha: 0.3,
            }
          },
        },
      }],
    };
    zingchart.render({
      id: 'usa_map',
      data: usa_map_config
    });


    // Function to gather state ID on click and load county map of state using ID
    zingchart.bind('usa_map', 'shape_click', function (e) {
      let new_map_id = 'usa_' + String(e.shapeid).toLowerCase();
      let state_id = String(e.shapeid).toLowerCase();
      console.log('usa_map', new_map_id, state_id)
      let map_name = 'maps, maps-usa_'.concat(state_id)

      zingchart.loadModules(map_name, function (e) {
        const county_map_config = {
          backgroundColor: 'none', // This is in the root
          plotarea: {
            backgroundColor: 'transparent',
            margin: 'dynamic',
            marginLeftOffset: '-10%',
            marginRightOffset: '10%',
            hoverState: {
              backgroundColor: 'blue'
            },
          },
          shapes: [{
            type: 'zingchart.maps',
            options: {
              name: new_map_id,
              style: {
                controls: {
                  visible: false
                },
                cursor: 'pointer',
                hoverState: {
                  backgroundColor: 'blue',
                  fontColor: '#F5F5F5',
                  alpha: 0.3,
                }
              },
            },
          }],
        };
        zingchart.render({
          id: 'county_map',
          data: county_map_config
        });
      })
    })

// Function to gather county ID on click and load county data from CSV using ID and Fetch
    zingchart.bind('county_map', 'shape_click', function (e) {
      let county_id = String(e.shapeid);
      console.log(county_id)
    })
  })
}




