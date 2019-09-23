function getConfigFromGit(){

  var data = UrlFetchApp.fetch("https://raw.githubusercontent.com/loan08cdth2/google_add_on_file_config/master/config.json");
  var text =data.getContentText();
  return JSON.parse(text);
}

//
//function getConfig() {
//  var config = 	  '	{                '
//+ '	  "root":[                       '
//+ '		{                            '
//+ '		  "website":"tiki",          '
//+ '		  "flag_use_x_path": 0,      '
//+ '		  "x_path_query": "",        '
//+ '		  "flag_use_regex": 1,       '
//+ '		  "regex_query": "(id=\\"product_price\\").*value\=\\"([0-9]+)",         '
//+ '		  "index": 2                '
//+ '		},                           '
//
//
//+ '		{                            '
//+ '		  "website":"aliexpress",          '
//+ '		  "flag_use_x_path": 0,      '
//+ '		  "x_path_query": "",        '
//+ '		  "flag_use_regex": 1,       '
//+ '		  "index": 3                '
//+ '		},                           '
//
//
//+ '		{                            '
//+ '		  "website":"sendo",          '
//+ '		  "flag_use_x_path": 1,      '
//+ '		  "x_path_query": "//strong[@class=\'currentPrice_2zpf\']",        '
//+ '		  "flag_use_regex": 0,       '
//+ '		  "regex_query": "",         '
//+ '		  "index": 2                '
//+ '		},                           '
//
//
//+ '		{                            '
//+ '		  "website":"lazada" ,        '
//+ '		  "flag_use_x_path": 1,      '
//+ '		  "x_path_query": "//script[not (contains(@type,\'text\'))]//text()[contains(.,\'price\')]",        '
//+ '		  "flag_use_regex_xpath": 1,        '
//+ '		  "regex_xpath": "(\\"price\\":)([0-9]+[.]*[0-9]*)",        '
//+ '		  "flag_use_regex": 1,       '
//+ '		  "regex_query": "(\\"price\\":)([0-9]+[.]*[0-9]*)",         '
//+ '		  "index": 2                '
//+ '		},                           '
//
//
//+ '		{                            '
//+ '		  "website":"adayroi",          '
//+ '		  "flag_use_x_path": 1,      '
//+ '		  "x_path_query": "//div[@class=\'price-info__sale\']",        '
//+ '		  "flag_use_regex": 0,       '
//+ '		  "regex_query": "",         '
//+ '		  "index": 2                '
//+ '		},                           '
//
//
//+ '		{                            '
//+ '		  "website":"amazon",        '
//+ '		  "flag_use_x_path": 1,      '
//+ '		  "x_path_query": "//span[@id=\'priceblock_ourprice\' or @id=\'priceblock_dealprice\' or @id=\'priceblock_dealprice\' or @id=\'priceBlockStrikePriceString a-text-strike\']",        '
//+ '		  "flag_use_regex_xpath": 0,        '
//+ '		  "regex_xpath": "",        '
//+ '		  "flag_use_regex": 1,       '
//+ '		  "regex_query": "(id=\\"priceblock_ourprice\\".*)\>([\$\ ]*)([0-9.]+)",         '
//+ '		  "index": 3                '
//+ '		}                            '
//
//
//+ '	  ]                              '
//+ '	}                                ';
//  
//  if (config  == null || config == ""){
//    JSON.parse('{}')
//  }
//  Logger.log(config);
//  return JSON.parse(config);
//}


function findConfigJsonByWebsite(website) {

  if (website == null || website == ""){
    website = "https://tiki.vn/dien-thoai-nokia-105-single-sim-2017-hang-chinh-hang-p809652.html?src=category-page-1789.1796&2hi=1&_lc=Vk4wMzkwMjMwMDg%253D&spid=811080";
  }
  var configJson = getConfigFromGit();
  var a= configJson.length;
  var b = configJson.root.length;
  
  for (var i = 0; i < configJson.root.length; i++ ) {
     var websiteJson = configJson.root[i].website;
    
      if (website.indexOf(websiteJson) > -1) {
        return configJson.root[i];
      }
  }
   
  return null;
  
}

function test(){
  var website = null;
  var a = findConfigJsonByWebsite(website);
  Logger(a.website);
  
}