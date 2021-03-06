var NiagaDataStore;
var NiagaColumnModel;
var NiagaListingEditorGrid;


/*
 id : 1
nama : faisal
alamat : gebang
tgl_Laporan: 01/03/1986 
 
 */

Ext.onReady(function(){
	
Ext.QuickTips.init();     

//	var myData = [
//          [23, 'faisal', 'gebang', '01/03/1986'],
//          [23, 'faisal', 'gebang', '01/03/1986'],
//          [23, 'faisal', 'gebang', '01/03/1986'],
//          [23, 'faisal', 'gebang', '01/03/1986'],
//          [23, 'faisal', 'gebang', '01/03/1986'],
//          [23, 'faisal', 'gebang', '01/03/1986'],
//          [23, 'faisal', 'gebang', '01/03/1986'],
//          [23, 'faisal', 'gebang', '01/03/1986']
//      ];

     

      // create the data store
      var NiagaDataStore = new Ext.data.Store({
          fields: [
             {name: 'id'},
             {name: 'nama'},
             {name: 'alamat'},
             {name: 'tgl_Laporan'}
          ],
          url:'data.store'
      });

      // manually load local data
//      NiagaDataStore.loadData(myData);

//	 NiagaDataStore = new Ext.data.Store({
//      proxy: new Ext.data.HttpProxy({
//                url: 'php/grid.php', 
//                method: 'POST'
//            }),            
//      reader: new Ext.data.JsonReader({
//        root: 'results',
//        totalProperty: 'total'
//       
//      },
//	   [ 
//        {name: 'id', type: 'int'},
//        {name: 'nama', type: 'string'},
//        {name: 'alamat', type: 'string'},
//        {name: 'tgl_Laporan', type: 'string'}
//        
//      ]),
//      sortInfo:{field: 'id', direction: "ASC"}
//    });
    
//	NiagaDataStore.load({params:{start:0,limit:5}});
  
  //tampilan awal
  NiagaColumnModel = new Ext.grid.ColumnModel(
    [{
        header: 'Id',
        readOnly: true,
        dataIndex: 'id',
        width: 40,
        hidden: false
		
      },{
        header: 'Nama',
        dataIndex: 'nama',
        width: 130,
        editor: new Ext.form.TextField({
            allowBlank: false,
            maxLength: 20,
            maskRe: /([a-zA-Z0-9\s]+)$/
          })
      },{
        header: 'Alamat',
        dataIndex: 'alamat',
        width: 160,
        editor: new Ext.form.TextField({
          allowBlank: false,
          maxLength: 20,
          maskRe: /([a-zA-Z0-9\s]+)$/
          })
      },{
				header: 'Tanggal Laporan',
				dataIndex: 'tgl_Laporan',
				width: 120,
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				editor: new Ext.form.DateField({
					format: 'm/d/Y'
				}),
				hidden: false
		}]
    );
    NiagaColumnModel.defaultSortable= true;
    
  //tampilan luar
  NiagaListingEditorGrid =  new Ext.grid.GridPanel({
     // id: 'NiagaListingEditorGrid',  
	  title: 'Input Laporan Niaga',
	  store: NiagaDataStore,
      cm: NiagaColumnModel,	 
      //enableColLock:false,
      //clicksToEdit:2,	 
	  width:455,
	  height:210,
	  
	  //loadMask: true,
	  
	  //selModel: new Ext.grid.RowSelectionModel({singleSelect:false}),
      bbar: new Ext.PagingToolbar({
            pageSize: 5,
            store: NiagaDataStore,
            displayInfo: true,
            displayMsg: 'Displaying data {0} - {1} of {2}',
            emptyMsg: "No data to display"
        })
	  
	   });
	 
     NiagaListingEditorGrid.render('here');
 
     
  // This was added in tutorial 5
  });// JavaScript Document