angular.module('app', []);

function getSomethingFromNodeApp(){
	$.ajax({
            url: 'http://localhost:8001/api/test',
            type: 'GET',
            dataType: 'json',            
            success: function (data) {                
                $("#result").innerHtml= data;
            },
            error: function () {
                console.log("error");
            }
        });        
}

