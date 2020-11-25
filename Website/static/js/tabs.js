function openMaturityLevel(evt, maturityLevel) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(maturityLevel).style.display = "block";
    evt.currentTarget.className += " active";

    window.scrollTo(0, 0);
  }

  // Load maturity, either default or from url
  var element = document.getElementById("maturity1"); // default is maturity 1

  // get url to extract parameter
  const url_string = window.location.href;
  var maturity_param = '';
  var split_url;
  
  split_url = url_string.split('#');
  maturity_param = split_url[1];
  
  // If there's a parameter in the URL, open that maturity level
  if(maturity_param == 'maturity2' || maturity_param == 'maturity3'){
    element = document.getElementById(maturity_param);
  }
  
  console.log (element);
    // If element isn't "undefined" and it isn't "null", click it
  if(typeof(element) != 'undefined' && element != null){
      element.click();
  }
  