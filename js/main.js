require(['libs/jquery-1.7.1.min',
         'libs/mustache',
         'app/Ajax'],
         function($, M, Ajax){
	
	Ajax.getUsers();
});