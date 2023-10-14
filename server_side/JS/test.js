window.onload = function () {
    function usa_map() {
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
            let us_map = zingchart.render({
                id: 'usa_map',
                data: usa_map_config
            });
            return us_map
        })
    }

    usa_map()
}
    function state_id(map) {
        let get_state_id = document.getElementById('usa_map');
        get_state_id.onclick = function () {
            zingchart.shape_click = function (e) {
                // console.log(arguments[0].shapeid);
                const state_id = arguments[0].shapeid; // Assign the value directly
                console.log(state_id)
                return state_id
            };
        };
    }
