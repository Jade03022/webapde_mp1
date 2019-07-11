function displaysales(){
    $(document).ready(function(){
        var t = $('#table').DataTable();
        t.clear()
        
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
             if (req.readyState == XMLHttpRequest.DONE) 
             {
                  var text = JSON.parse(req.responseText);
                    for(var key in text.sales){
                        if(text.sales.hasOwnProperty(key)){
                            t.row.add( [
                              key,
                              text.sales[key].datetime,
                              text.sales[key].burger,
                              text.sales[key].species
                            ]).draw( false );
                        }
                    }
                }
            }
            req.open("GET", "https://api.jsonbin.io/b/5d26e966f0c0927b3eb4c8f3", true);
            req.setRequestHeader("secret-key","$2a$10$1ctkNrItxvgZLpXGWT936uQt376TVgRrfv1lpu0/mdgDfHQhN3pa2");
            req.send();
   });
}