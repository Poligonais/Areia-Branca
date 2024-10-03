var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoVreadeFundeio3_1 = new ol.format.GeoJSON();
var features_AnexoVreadeFundeio3_1 = format_AnexoVreadeFundeio3_1.readFeatures(json_AnexoVreadeFundeio3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVreadeFundeio3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVreadeFundeio3_1.addFeatures(features_AnexoVreadeFundeio3_1);
var lyr_AnexoVreadeFundeio3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVreadeFundeio3_1, 
                style: style_AnexoVreadeFundeio3_1,
                popuplayertitle: "Anexo V - Área de Fundeio 3",
                interactive: true,
                title: '<img src="styles/legend/AnexoVreadeFundeio3_1.png" /> Anexo V - Área de Fundeio 3'
            });
var format_AnexoIVreadeFundeio2_2 = new ol.format.GeoJSON();
var features_AnexoIVreadeFundeio2_2 = format_AnexoIVreadeFundeio2_2.readFeatures(json_AnexoIVreadeFundeio2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVreadeFundeio2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVreadeFundeio2_2.addFeatures(features_AnexoIVreadeFundeio2_2);
var lyr_AnexoIVreadeFundeio2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVreadeFundeio2_2, 
                style: style_AnexoIVreadeFundeio2_2,
                popuplayertitle: "Anexo IV - Área de Fundeio 2 ",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVreadeFundeio2_2.png" /> Anexo IV - Área de Fundeio 2 '
            });
var format_AnexoIIIreadeFundeio1_3 = new ol.format.GeoJSON();
var features_AnexoIIIreadeFundeio1_3 = format_AnexoIIIreadeFundeio1_3.readFeatures(json_AnexoIIIreadeFundeio1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIIreadeFundeio1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIIreadeFundeio1_3.addFeatures(features_AnexoIIIreadeFundeio1_3);
var lyr_AnexoIIIreadeFundeio1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIIreadeFundeio1_3, 
                style: style_AnexoIIIreadeFundeio1_3,
                popuplayertitle: "Anexo III - Área de Fundeio 1",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIIreadeFundeio1_3.png" /> Anexo III - Área de Fundeio 1'
            });
var format_AnexoIITERMISA_4 = new ol.format.GeoJSON();
var features_AnexoIITERMISA_4 = format_AnexoIITERMISA_4.readFeatures(json_AnexoIITERMISA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIITERMISA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIITERMISA_4.addFeatures(features_AnexoIITERMISA_4);
var lyr_AnexoIITERMISA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIITERMISA_4, 
                style: style_AnexoIITERMISA_4,
                popuplayertitle: "Anexo II - TERMISA ",
                interactive: true,
                title: '<img src="styles/legend/AnexoIITERMISA_4.png" /> Anexo II - TERMISA '
            });
var format_AnexoIPortodeAreiaBranca_5 = new ol.format.GeoJSON();
var features_AnexoIPortodeAreiaBranca_5 = format_AnexoIPortodeAreiaBranca_5.readFeatures(json_AnexoIPortodeAreiaBranca_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIPortodeAreiaBranca_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIPortodeAreiaBranca_5.addFeatures(features_AnexoIPortodeAreiaBranca_5);
var lyr_AnexoIPortodeAreiaBranca_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIPortodeAreiaBranca_5, 
                style: style_AnexoIPortodeAreiaBranca_5,
                popuplayertitle: "Anexo I - Porto de Areia Branca ",
                interactive: true,
                title: '<img src="styles/legend/AnexoIPortodeAreiaBranca_5.png" /> Anexo I - Porto de Areia Branca '
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoVreadeFundeio3_1.setVisible(true);lyr_AnexoIVreadeFundeio2_2.setVisible(true);lyr_AnexoIIIreadeFundeio1_3.setVisible(true);lyr_AnexoIITERMISA_4.setVisible(true);lyr_AnexoIPortodeAreiaBranca_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoVreadeFundeio3_1,lyr_AnexoIVreadeFundeio2_2,lyr_AnexoIIIreadeFundeio1_3,lyr_AnexoIITERMISA_4,lyr_AnexoIPortodeAreiaBranca_5];
lyr_AnexoVreadeFundeio3_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVreadeFundeio2_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIIreadeFundeio1_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIITERMISA_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIPortodeAreiaBranca_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVreadeFundeio3_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIVreadeFundeio2_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIIreadeFundeio1_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIITERMISA_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIPortodeAreiaBranca_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVreadeFundeio3_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIVreadeFundeio2_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'no label', });
lyr_AnexoIIIreadeFundeio1_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIITERMISA_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPortodeAreiaBranca_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPortodeAreiaBranca_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});