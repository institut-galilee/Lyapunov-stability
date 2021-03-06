{
  module: 'MMM-Paris-RATP-PG',
  position: 'top_left',
  header: 'Connections',
  config: {
debug: false,
lineDefault: {
hideTraffic: [
"le trafic est interrompu entre Aulnay et Aeroport Charles de Gaulle 2 TGV de 23:00 à fin de service jusqu'au 16/03/18. Bus de remplacement à dispo. (travaux de modernisation)",
  "Trafic normal sur l'ensemble de la ligne.",
  "le trafic est interrompu entre Nanterre-Prefecture et Cergy/ Poissy de 21:30 à fin de service jusqu'au 16/02/18. Bus de remplacement à dispo. (travaux)",
],
conversion: { "Trafic normal sur l'ensemble de la ligne." : 'Traffic normal'},
updateInterval: 1 * 2 * 60 * 1000,
},
lines: [
{type: 'buses', line: 38, stations: 'observatoire+++port+royal', destination: 'A', firstCellColor: '#0055c8'},
{type: 'buses', line: 91, stations: 'observatoire+++port+royal', destination: 'A', firstCellColor: '#dc9600'},
//    {type: 'buses', line: 91, stations: 'observatoire+++port+royal', destination: 'R', firstCellColor: '#dc9600', lineColor: 'Brown'},
{type: 'buses', line: 91, stations: 'observatoire+++port+royal', destination: 'R', firstCellColor: '#dc9600'},
{type: 'rers', line: 'B', stations: 'port+royal', destination: 'A', label: 'B', firstCellColor: '#dc9600'},
//	  {type: 'rers', line: 'B', stations: 'port+royal', destination: 'A', label: 'B', firstCellColor: '#7BA3DC'},
{type: 'traffic', line: ['rers', 'B'], firstCellColor: 'Blue', lineColor: 'green'},
// 	  {type: 'metros', line: '6', stations: 'raspail', destination: 'A', label: '6', firstCellColor: '#6ECA97'},
// 	  {type: 'pluie', place: '751140', updateInterval: 1 * 5 * 60 * 1000, label: 'Paris', iconSize: 0.70},
// //	  {type: 'autolib', name: 'Paris/Henri%20Barbusse/66', label: 'Barbusse', lineColor: 'green'},
// //	  {type: 'autolib', name: 'Paris/Michelet/6', label: 'Michelet', utilib: true, backup: 'Paris/Henri%20Barbusse/66'},
// 	  {type: 'velib', stationId: 14111, label: 'Cassini', velibGraph : false, keepVelibHistory: true},
// 	  {type: 'velib', stationId: 6018, label: 'Assas', velibGraph: true, keepVelibHistory: true},
  ],
  },
},
