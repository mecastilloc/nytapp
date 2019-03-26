
var number;
var startYear;
var endYear;
var query;

$("#search").click(function(){
    $(".searchResults").empty();
});

$("#search").click(function(){
    query=$("#searchTerm").val();
    number=$("#numRecords").val();
    startYear=$("#startYear").val();
    endYear=$("#endYear").val();
    
    key= "M4AgJupqoei1hS2ev6liFB66QLlsoxb0"
    queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date="+startYear+"0101&end_date="+endYear+"1231&q="+query+"&sort=relevance&api-key="+key
    
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(queryUrl);
        console.log(response.response.docs[0].lead_paragraph);
    
        for(var i=0; i<number; i++){
            var noticediv=$("<div>");
            var p =$("<p>");
            p.text(response.response.docs[i].lead_paragraph);
            noticediv.append(p);
            $(".searchResults").prepend(noticediv);
        }
    });

});
