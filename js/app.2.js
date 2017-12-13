var Framework7React = window['framework7-react'],
	  Framework7App = Framework7React.Framework7App,
    Statusbar = Framework7React.Statusbar,
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

var About = function About() {
  return React.createElement(
    Page,
    null,
    React.createElement(Navbar, { title: "About", backLink: "Back", sliding: true }),
    React.createElement(
      ContentBlock,
      { inner: true },
      React.createElement(
        "p",
        null,
        "Here is About page!"
      ),
      React.createElement(
        "p",
        null,
        "You can go ",
        React.createElement(
          "f7-link",
          { back: true },
          "back"
        ),
        "."
      ),
      React.createElement(
        "p",
        null,
        "Some junk text goes in here"
      ),
      React.createElement(
        "p",
        null,
        "Some more junk text goes in here."
      )
    )
  );
};

var onChangeHandler = function onChangeHandler(event) {
  console.log('change');
};

var pStyle = { margin: '1em 0' };

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
        React.createElement(Navbar, { backLink: "Back", title: "Forms", sliding: true }),
        React.createElement(
          ContentBlockTitle,
          null,
          "Form"
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
              "URL"
            ),
            React.createElement(FormInput, { type: "url", placeholder: "URL" })
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
            ListItem,
            null,
            React.createElement(
              FormLabel,
              null,
              "Birth date"
            ),
            React.createElement(FormInput, { type: "date", placeholder: "Birth date", value: this.state.birthDate })
          ),
          React.createElement(
            ListItem,
            null,
            React.createElement(
              FormLabel,
              null,
              "Date time"
            ),
            React.createElement(FormInput, { type: "datetime-local" })
          ),
          React.createElement(
            ListItem,
            null,
            React.createElement(
              FormLabel,
              null,
              "Gender"
            ),
            React.createElement(
              FormInput,
              { type: "select" },
              React.createElement(
                "option",
                { value: "1" },
                "Male"
              ),
              React.createElement(
                "option",
                { value: "1" },
                "Female"
              )
            )
          ),
          React.createElement(
            ListItem,
            null,
            React.createElement(
              FormLabel,
              null,
              "Switch"
            ),
            React.createElement(FormInput, { type: "switch", onChange: onChangeHandler })
          ),
          React.createElement(
            ListItem,
            null,
            React.createElement(
              FormLabel,
              null,
              "Range"
            ),
            React.createElement(FormInput, { type: "range", min: "0", max: "100", step: "1", value: "90" })
          ),
          React.createElement(
            ListItem,
            null,
            React.createElement(
              FormLabel,
              null,
              "Textarea"
            ),
            React.createElement(FormInput, { type: "textarea", placeholder: "Textarea" })
          )
        ),
        React.createElement(
          ContentBlockTitle,
          null,
          "Form With Floating Labels"
        ),
        React.createElement(
          List,
          { form: true },
          React.createElement(
            ListItem,
            null,
            React.createElement(
              FormLabel,
              { floating: true },
              "Name"
            ),
            React.createElement(FormInput, { type: "text", placeholder: "Name" })
          ),
          React.createElement(
            ListItem,
            null,
            React.createElement(
              FormLabel,
              { floating: true },
              "Password"
            ),
            React.createElement(FormInput, { type: "password", placeholder: "Password" })
          ),
          React.createElement(
            ListItem,
            null,
            React.createElement(
              FormLabel,
              { floating: true },
              "E-mail"
            ),
            React.createElement(FormInput, { type: "email", placeholder: "E-mail" })
          )
        ),
        React.createElement(
          ContentBlockTitle,
          null,
          "Form Without Labels"
        ),
        React.createElement(
          List,
          { form: true },
          React.createElement(
            ListItem,
            null,
            React.createElement(FormInput, { type: "text", placeholder: "Name" })
          ),
          React.createElement(
            ListItem,
            null,
            React.createElement(FormInput, { type: "password", placeholder: "Password" })
          ),
          React.createElement(
            ListItem,
            null,
            React.createElement(FormInput, { type: "email", placeholder: "E-mail" })
          )
        ),
        React.createElement(
          ContentBlockTitle,
          null,
          "Checkboxes"
        ),
        React.createElement(
          List,
          { form: true },
          [1, 2, 3].map(function (n) {
            return React.createElement(ListItem, {
              checkbox: true,
              key: n,
              name: "my-checkbox",
              value: n,
              title: "Checkbox " + n
            });
          })
        ),
        React.createElement(
          ContentBlockTitle,
          null,
          "Radios"
        ),
        React.createElement(
          List,
          { form: true },
          [1, 2, 3].map(function (n) {
            return React.createElement(ListItem, {
              radio: true,
              key: n,
              name: "my-radio",
              checked: n === self.state.radioSelected,
              value: n,
              title: "Radio " + n,
              onChange: function onChange() {
                self.onRadioChange(n);
              }
            });
          })
        ),
        React.createElement(
          ContentBlockTitle,
          null,
          "Buttons"
        ),
        React.createElement(
          ContentBlock,
          { inner: true },
          React.createElement(
            Button,
            { style: pStyle },
            "Button"
          ),
          React.createElement(
            Button,
            { round: true, style: pStyle },
            "Button Round"
          ),
          React.createElement(
            Button,
            { fill: true, style: pStyle },
            "Button Fill"
          ),
          React.createElement(
            ButtonsSegmented,
            { style: pStyle },
            React.createElement(
              Button,
              { round: true, active: true },
              "Button 1"
            ),
            React.createElement(
              Button,
              { round: true },
              "Button 2"
            ),
            React.createElement(
              Button,
              { round: true },
              "Button 3"
            )
          ),
          React.createElement(
            ButtonsSegmented,
            { color: "orange", style: pStyle },
            React.createElement(
              Button,
              { round: true, big: true },
              "Button 1"
            ),
            React.createElement(
              Button,
              { round: true, big: true, active: true },
              "Button 2"
            ),
            React.createElement(
              Button,
              { round: true, big: true },
              "Button 3"
            )
          ),
          React.createElement(
            GridRow,
            { style: pStyle },
            React.createElement(
              GridCol,
              null,
              React.createElement(
                Button,
                { big: true, fill: true, color: "green" },
                "Send"
              )
            ),
            React.createElement(
              GridCol,
              null,
              React.createElement(
                Button,
                { big: true, fill: true, color: "red" },
                "Delete"
              )
            )
          ),
          React.createElement(
            GridRow,
            { style: pStyle },
            React.createElement(
              GridCol,
              null,
              React.createElement(
                Button,
                { fill: true, raised: true, color: "green" },
                "Raised"
              )
            ),
            React.createElement(
              GridCol,
              null,
              React.createElement(
                Button,
                { raised: true, color: "red" },
                "Raised"
              )
            ),
            React.createElement(
              GridCol,
              null,
              React.createElement(
                Button,
                { fill: true, raised: true, color: "pink" },
                "Raised"
              )
            )
          )
        )
      );
    }
});



var LeftPanel = function LeftPanel(props, context) {
  return React.createElement(
    Panel,
    { left: true, reveal: true, layout: "dark" },
    React.createElement(
      View,
      { id: "left-panel-view", navbarThrough: true, dynamicNavbar: "true" },
      context.framework7AppContext.theme.ios ? React.createElement(Navbar, { title: "BINARYHAVEN" }) : null,
      React.createElement(
        Pages,
        null,
        React.createElement(
          Page,
          null,
          context.framework7AppContext.theme.material ? React.createElement(Navbar, { title: "BINARYHAVEN" }) : null,
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
            "BINARYHAVEN"
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
            "BINARY.COM"
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
          "Framework7"
        )
      ) : null,
      React.createElement(
        Pages,
        null,
        React.createElement(
          Page,
          null,
          context.framework7AppContext.theme.material ? React.createElement(
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
            null,
            "Welcome to BINARYHAVEN"
          ),
          React.createElement(
            ContentBlock,
            { inner: true },
            React.createElement(
              "p",
              null,
              "This application is an automated trading system that connects to your Binary.com account and generate $10 per day for you. You must have credits available to start strading. To obtain trading credits go to the account settings panel on the right."
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

var routes = [{
  path: '/about/',
  component: About
}, {
  path: '/form/',
  component: Form
}];

var App = function App() {
  return (
    //Change themeType to "material" to use the Material theme
    React.createElement(
      Framework7App,
      { themeType: "ios", routes: routes },
      React.createElement(Statusbar, null),
      React.createElement(LeftPanel, null),
      //React.createElement(RightPanel, null),
      React.createElement(MainViews, null),
      React.createElement(AppPopup, null),
      React.createElement(AppLoginScreen, null)
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));