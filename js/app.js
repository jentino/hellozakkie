
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////Framework7React//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

var Framework7React = window['framework7-react'],
Framework7App = Framework7React.Framework7App,
Statusbar = Framework7React.Statusbar,
Progressbar = Framework7React.Progressbar,
Panel = Framework7React.Panel,
View = Framework7React.View,
Navbar = Framework7React.Navbar,
Pages = Framework7React.Pages,
Page = Framework7React.Page,
ContentBlock = Framework7React.ContentBlock,
ContentBlockTitle = Framework7React.ContentBlockTitle,
List = Framework7React.List,
ListItem = Framework7React.ListItem,
Views = Framework7React.Views,
NavLeft = Framework7React.NavLeft,
Link = Framework7React.Link,
NavCenter = Framework7React.NavCenter,
NavRight = Framework7React.NavRight,
GridRow = Framework7React.GridRow,
GridCol = Framework7React.GridCol,
Popup = Framework7React.Popup,
LoginScreen = Framework7React.LoginScreen,
LoginScreenTitle = Framework7React.LoginScreenTitle,
ListButton = Framework7React.ListButton,
ListLabel = Framework7React.ListLabel,
FormLabel = Framework7React.FormLabel,
FormInput = Framework7React.FormInput,
Button = Framework7React.Button,
ButtonsSegmented = Framework7React.ButtonsSegmented;

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////variables//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

var MainTitle = "BinaryHaven";
var progressamount = 0;
var showtimerclock = "";
var showBalance = "";
var tokenmaster = "eXl5FaHcDVEmwI5";
var appidmaster = "11135";
var wsmaster;


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////wsconnect//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


function wsconnect() {	
	
  //wsmaster = new WebSocket('ws://10.0.0.2:1337');
  wsmaster = new WebSocket('ws://127.0.0.1:1337');
	
	wsmaster.onopen = function(evtmaster) {
		onOpenmaster(evtmaster,tokenmaster);
	};
	
	wsmaster.onmessage = function(evtmaster) {
		onMessagemaster(evtmaster);
	};		
}

onOpenmaster = function(evtmaster,tokenmaster) {
	var token = tokenmaster;
	wsmaster.send(JSON.stringify({
		data: 'sendMeServerClock'
	}));
};

var getthebalance = function() {
	wsmaster.send(JSON.stringify({
		data: 'requestBalance'
	}));
};

onMessagemaster = function(msgmaster) {
  
  try {
      var json = JSON.parse(msgmaster.data);
  }catch (e) {
      console.log('Invalid JSON: ', msgmaster.data);
  return;
  }
  if (json.type === 'timer') { 
      showtimerclock = String(json.data);
  }
  if (json.type === 'balance') { 
      showBalance = String(json.data);
  }
  if(json.type == 'fullname'){
    showFullName = String(json.data);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////About//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

var About = function About() {
  return React.createElement(Page,null,
      React.createElement(Navbar, { title: "About", backLink: "Back", sliding: true }),
      React.createElement(ContentBlock,{ inner: true },
        React.createElement("p",null,"Here is About page!"),
        React.createElement("p",null,"You can go ",React.createElement(Link,{ back: true },"back"),"."),
        React.createElement("p",null,"Some junk text goes in here"),
        React.createElement("p",null,"Some more junk text goes in here.")
      )
  );
};

//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////About//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

var onChangeHandler = function onChangeHandler(event) {
  console.log('change');
};

var pStyle = { margin: '1em 0' };

var balanceStyle = { color: 'green', margin: '22'};


//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////Form//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


var Form = React.createClass({
    getInitialState: function () {
      return {
        birthDate: '2014-04-30',
        radioSelected: 1
      };
    },

    onRadioChange(value) {
      this.setState({
        birthDate: this.birthDate,
        radioSelected: value
      });
    },

    render: function () {
      var self = this;

      return React.createElement(
        Page,
        null,
        React.createElement(Navbar, { backLink: "Back", title: "BinaryHaven", sliding: true }),
        React.createElement(
          ContentBlockTitle,
          null,
          "Register"
        ),
        React.createElement(
          List,
          { form: true },
          React.createElement(
            ListItem,
            null,
            React.createElement(
              FormLabel,
              null,
              "Name"
            ),
            React.createElement(FormInput, { type: "text", placeholder: "Name" })
          ),
          React.createElement(
            ListItem,
            null,
            React.createElement(
              FormLabel,
              null,
              "Password"
            ),
            React.createElement(FormInput, { type: "password", placeholder: "Password" })
          ),
          React.createElement(
            ListItem,
            null,
            React.createElement(
              FormLabel,
              null,
              "E-mail"
            ),
            React.createElement(FormInput, { type: "email", placeholder: "E-mail" })
          ),
          React.createElement(
            ListItem,
            null,
            React.createElement(
              FormLabel,
              null,
              "Phone"
            ),
            React.createElement(FormInput, { type: "tel", placeholder: "Phone" })
          ),
          React.createElement(
            ContentBlock,
            { inner: true },
            React.createElement(
              Button,
              { style: pStyle },
              "Button"
            )
          )
        )
      );
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////LeftPanel//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

var LeftPanel = function LeftPanel(props, context) {
  return React.createElement(
    Panel,
    { left: true, reveal: true, layout: "dark" },
    React.createElement(
      View,
      { id: "left-panel-view", navbarThrough: true, dynamicNavbar: "true" },
      context.framework7AppContext.theme.ios ? React.createElement(Navbar, { title: "BinaryHaven" }) : null,
      React.createElement(
        Pages,
        null,
        React.createElement(
          Page,
          null,
          context.framework7AppContext.theme.ios ? React.createElement(Navbar, { title: "BinaryHaven" }) : null,
          React.createElement(
            ContentBlock,
            { inner: true },
            React.createElement(
              "p",
              null,
              "Manage your accounts here"
            )
          ),
          React.createElement(
            ContentBlockTitle,
            null,
            "BinaryHaven"
          ),
          React.createElement(
            List,
            null,
            React.createElement(ListItem, { link: "/about/", title: "About" }),
            React.createElement(ListItem, { link: "/form/", title: "Form" })
          ),
          React.createElement(
            ContentBlockTitle,
            null,
            "Binary.com"
          ),
          React.createElement(
            List,
            null,
            React.createElement(ListItem, { link: "/about/", title: "About", linkView: "#main-view", linkClosePanel: true }),
            React.createElement(ListItem, { link: "/form/", title: "Form", linkView: "#main-view", linkClosePanel: true })
          )
        )
      )
    )
  );
};

LeftPanel.contextTypes = {
  framework7AppContext: React.PropTypes.object
};


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////MainViews//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


var MainViews = function MainViews(props, context) {
  return React.createElement(
    Views,
    null,
    React.createElement(
      View,
      { id: "main-view", navbarThrough: true, dynamicNavbar: true, main: true, url: "/" },
      context.framework7AppContext.theme.ios ? React.createElement(
        Navbar,
        null,
        React.createElement(
          NavLeft,
          null,
          React.createElement(Link, { icon: "icon-bars", openPanel: "left" })
        ),
        React.createElement(
          NavCenter,
          { sliding: true },
          MainTitle
        )
      ) : null,
      React.createElement(
        Pages,
        null,
        React.createElement(
          Page,
          null,
          context.framework7AppContext.theme.ios ? React.createElement(
            Navbar,
            null,
            React.createElement(
              NavLeft,
              null,
              React.createElement(Link, { icon: "icon-bars", openPanel: "left" })
            ),
            React.createElement(
              NavCenter,
              { sliding: true },
              "Framework7"
            )
          ) : null,
          React.createElement(
            ContentBlockTitle,
            { style: balanceStyle },
            React.createElement(
              "h2",
              null,
              showFullName),
            React.createElement(
              "p",
              null,
              " Profit: " + 0 + " " + " Timer: " + showtimerclock
            )
          ),
          React.createElement(
            ContentBlock,
            { inner: true },
            React.createElement(
              Progressbar,
              { progress: progressamount, color: "green" }),
            React.createElement(
              "center",
              {style: balanceStyle},React.createElement(
                "h1",
                {style: balanceStyle},
                "BALANCE $" + showBalance
              )
            )
          ),React.createElement(
            ContentBlock,
            null,
              React.createElement(
                "p",
                { inner: true },
                React.createElement(
                  Button,
                  { opengetthebalance: "#getthebalance"},
                  "Connect"
                )
              )
            ),
          React.createElement(
            ContentBlock,
            null,
            React.createElement(
              GridRow,
              null,
              React.createElement(
                GridCol,
                { width: 50 },
                React.createElement(
                  Button,
                  { openPopup: "#popup" },
                  "Register"
                )
              ),
              React.createElement(
                GridCol,
                { width: 50 },
                React.createElement(
                  Button,
                  { openLoginScreen: "#login-screen" },
                  "Sign In"
                )
              )
            )
          )
        )
      )
    )
  );
};

MainViews.contextTypes = {
  framework7AppContext: React.PropTypes.object
};


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////AppPopup//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

var AppPopup = function AppPopup() {
  return React.createElement(
    Popup,
    { id: "popup" },
    React.createElement(
      View,
      { navbarFixed: true },
      React.createElement(
        Pages,
        null,
        React.createElement(
          Page,
          null,
          React.createElement(
            Navbar,
            { title: "Register" },
            React.createElement(
              NavRight,
              null,
              React.createElement(
                Link,
                { closePopup: true },
                "Close"
              )
            )
          ),
          React.createElement(
            ContentBlock,
            null,
            "Here you can register a BINARYHAVEN account to start using the application."
          )
        )
      )
    )
  );
};

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////AppLoginScreen//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


var AppLoginScreen = function AppLoginScreen() {
  return React.createElement(
    LoginScreen,
    { id: "login-screen" },
    React.createElement(
      View,
      null,
      React.createElement(
        Pages,
        null,
        React.createElement(
          Page,
          { loginScreen: true },
          React.createElement(
            LoginScreenTitle,
            null,
            "Login"
          ),
          React.createElement(
            List,
            { form: true },
            React.createElement(
              ListItem,
              null,
              React.createElement(
                FormLabel,
                null,
                "Username"
              ),
              React.createElement(FormInput, { name: "username", placeholder: "Username", type: "text" })
            ),
            React.createElement(
              ListItem,
              null,
              React.createElement(
                FormLabel,
                null,
                "Password"
              ),
              React.createElement(FormInput, { name: "password", type: "password", placeholder: "Password" })
            )
          ),
          React.createElement(
            List,
            null,
            React.createElement(ListButton, { title: "Sign In", closeLoginScreen: true }),
            React.createElement(
              ListLabel,
              null,
              React.createElement(
                "p",
                null,
                "Click Sign In to close Login Screen"
              )
            )
          )
        )
      )
    )
  );
};

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////routes//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


var routes = [{
  path: '/about/',
  component: About
}, {
  path: '/form/',
  component: Form
}];


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////App//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


var App = function App() {
  return (
    //Change themeType to "ios" to use the ios theme
    React.createElement(
      Framework7App,
      { themeType: "ios", routes: routes },
      React.createElement(Statusbar, null),
      React.createElement(LeftPanel, null),
      React.createElement(MainViews, null),
      React.createElement(AppPopup, null),
      React.createElement(AppLoginScreen, null)
    )
  );
};

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////ReactDOM//////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


var myVar = setInterval(myTimer,1000);
//wsconnect();

function myTimer(){
  if(progressamount == 100){
    progressamount = 0;

  }else { 

    progressamount= progressamount + 10;
  }
  ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
}

