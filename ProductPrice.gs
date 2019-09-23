//function menuGetPrice(cellPrice , website){
//   var result = "";
//  if (!website){
//    website = "https://www.lazada.vn/products/selens-hoa-van-vintage-camera-day-deo-vai-dslr-dsl-retro-day-deo-vai-i290198804-s459712879.html?spm=a2o4n.searchlistcategory.list.3.213944bbHI67ob&search=1";
//  }
//  var config = findConfigJsonByWebsite(website);
//  if (config.website) {
//    if (config.flag_use_x_path == 1) {
//       loadWebSiteUsingXPath(cellPrice, website, config);
//    }
//    else {
//      cellPrice.setValue(loadWebsiteUsingContentText(website, config));
//    }
//  }
//  return result;
//}
function funcGetPrice(website) {
  var result = "";
  if (!website){
    website = "https://www.lazada.vn/products/selens-hoa-van-vintage-camera-day-deo-vai-dslr-dsl-retro-day-deo-vai-i290198804-s459712879.html?spm=a2o4n.searchlistcategory.list.3.213944bbHI67ob&search=1";
  }
  var config = findConfigJsonByWebsite(website);
  if (config.website) {
       result = loadWebsiteUsingContentText(website, config);
  }
  return result;
}

function loadWebsiteUsingContentText(website,config) {
  var data = UrlFetchApp.fetch(website);
  var text = data.getContentText();
  if (text) {
    return getDataByRegex(text, config.regex_query, config.index);
  }
  return null;
}

function loadWebSiteUsingXPath(cellPrice,website, config){
  var queryString = Math.random();
  
  var importXml = '=IMPORTXML("' + website +'","'+ config.x_path_query + '")';
  
  cellPrice.setFormula(importXml);
  //SpreadsheetApp.getActiveSheet().getRange("C1").setValue(importXml);
  var value = cellPrice.getValue().toString();
  if ((config.flag_use_regex_xpath) && config.flag_use_regex_xpath == 1){
    value =getDataByRegex(value, config.regex_xpath, config.index);

  }
  
  cellPrice.setValue(value);
}


function getData() {
  var queryString = Math.random();
  var website = "https://www.lazada.vn/products/selens-hoa-van-vintage-camera-day-deo-vai-dslr-dsl-retro-day-deo-vai-i290198804-s459712879.html?spm=a2o4n.searchlistcategory.list.3.213944bbHI67ob&search=1";
  var xPath = "//script[not (contains(@type,'text'))]//text()[contains(.,'price')]";
  var cellFunction1 = '=IMPORTXML("' + website +'","'+ xPath + '")';
  SpreadsheetApp.getActiveSheet().getRange('C1').setValue(cellFunction1);
  
  var value =getPriceByJson(SpreadsheetApp.getActiveSheet().getRange('C1').getValue().toString());
  SpreadsheetApp.getActiveSheet().getRange('C1').setValue(value);
 
//  var cellFunction2 = '=IMPORTXML("' + SpreadsheetApp.getActiveSheet().getRange('A4').getValue() + '?' + queryString + '","'+ SpreadsheetApp.getActiveSheet().getRange('A5').getValue() + '")';
//  SpreadsheetApp.getActiveSheet().getRange('C2').setValue(cellFunction2);
}


function getData1() {
  var queryString = Math.random();
  var website = "https://www.lazada.vn/products/selens-hoa-van-vintage-camera-day-deo-vai-dslr-dsl-retro-day-deo-vai-i290198804-s459712879.html?spm=a2o4n.searchlistcategory.list.3.213944bbHI67ob&search=1";
  var xPath = "//script[not (contains(@type,'text'))]//text()[contains(.,'price')]";
  var cellFunction1 = '=IMPORTXML("' + website +'","'+ xPath + '")';
  SpreadsheetApp.getActiveSheet().getRange('C1').setValue(cellFunction1);
  
  var value =getPriceByJson(SpreadsheetApp.getActiveSheet().getRange('C1').getValue().toString());
  SpreadsheetApp.getActiveSheet().getRange('C1').setValue(value);
 
//  var cellFunction2 = '=IMPORTXML("' + SpreadsheetApp.getActiveSheet().getRange('A4').getValue() + '?' + queryString + '","'+ SpreadsheetApp.getActiveSheet().getRange('A5').getValue() + '")';
//  SpreadsheetApp.getActiveSheet().getRange('C2').setValue(cellFunction2);
}