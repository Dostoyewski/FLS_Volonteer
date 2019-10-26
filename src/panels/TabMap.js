import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark, ZoomControl, GeolocationControl} from 'react-yandex-maps';
import "./TabMap.css"

export default class TabMap extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
  };

  state = {
    isLoaded: false,
    error: '',
  }
  
  render() { 
    return (
      <Fragment>
        <div class="wrapper" >
          <YMaps>
                <Map 
                  width={1000}
                  height={640}
                  defaultState={{ center: [59.935333, 30.254524], zoom: 11 }} >
                  <Placemark {... {
                    geometry: [59.902237, 30.288169],
                    properties: {
                    hintContent: 'Улица Манчинского, 19',
                    balloonContent: 'Приют "Лучшие друзья"' 
                    },
                    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']    
                    }
                  }
                  />
                  <Placemark {...{
                      geometry: [60.003489, 30.332801],
                      properties: {
                          hintContent: 'Улица Манчинского, 19',
                          balloonContent: 'Ветеринарная клиника "Друзья человека"'
                      },
                      modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
                    }
                  } 
                  />
                  <Placemark {...{
                      geometry: [59.954279, 30.437858],
                      properties: {
                          hintContent: 'Улица имени Василия Подшибякина, 46Б',
                          balloonContent: 'Товары для животных '
                      },
                      modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
                    }
                  } 
                  />

                  <ZoomControl options={{ float: 'right' }} />
                </Map>
            </YMaps>
        </div>
        
        

        <div class="loading-element">
          <img class="loading-element__image" src="https://flevix.com/wp-content/uploads/2019/08/Loading-Icon.gif" width="500" height="500" >
          </img>
        </div>
      </Fragment>      
    );
  }
}

/*
[
  {
    "id": 1,
    "title": "Центр помощи бездомным животным \"Лучик\" г. Надым",
    "description": "Приют для бездомных животных города Надым",
    "image": "https://50f2d48e.ngrok.io/api/v1/shelter/getlist/images/schem.JPG",
    "members": "",
    "urlVK": "141883313"
  },
  {
    "id": 2,
    "title": "Приют города Салехарда",
    "description": "Приют для бездомных животных",
    "image": "https://50f2d48e.ngrok.io/api/v1/shelter/getlist/images/no-img.jpg",
    "members": "",
    "urlVK": "147993097"
  }
]
*/