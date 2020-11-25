export default function Problem2() {

    const code1=()=>{
        return (
          <pre>
            <code>
              {`**Code snippet 1**
                var rows = [];
                for (var i = 0; i < args.length; i++) {
                    var obj = {
                        chatId: chatId
                    };
                    rows.push(obj);
                }var chatId = $("#chat").attr("chatId");
                $.post('/<apiendpoint>', { data: JSON.stringify(rows) });`}
            </code>
          </pre>
        );
    }


    const code2=()=>{
        return (
          <pre>
            <code>
              {`**Code Snippet 2**
                validateInteger : function(str, min, max) {
                if (str==null || str==undefined || (str + "").trim().length < 1) {
                        return Em.I18n.t('number.validate.empty');
                } else {	    }
                return null;
                },`}
            </code>
          </pre>
        );
    }


    const code3=()=>{
        return (
          <pre>
            <code>
              {`**Code Snippet 3**
                chatNotificationReceived: function(notification, message, sender) {
                    if (notification === "SHOW_ALERT") {
                        if (typeof message.type === "undefined") { message.type = "alert"; }
                            if (message.type == "alert") {
                                this.show_alert(message, sender);
                            } else if (message.type = "notification") {
                                this.show_notification(message);
                            }
                        } else if (notification === "HIDE_ALERT") {
                            this.hide_alert(sender);
                        }
                    }`}
            </code>
          </pre>
        );
    }

    return (
      <div className="problem2">
        <div className="code1">
          {code1()}
          <ul>
            <li>args is not defined</li>
            <li>
              "var chatId = $("#chat").attr("chatId");" this should be defined
              above for loop otherwise chatId will be undefined.
            </li>
          </ul>
          <br />
          <br />
        </div>
        <div className="code2">
          {code2()}
          <ul>
            <li>Em is not defined</li>
            <li>
              "{`if(!str || !!str.trim().length < 1)`}" this is another cleaner
              way of writting the if condition
            </li>
            <li>else statement is not needed</li>
          </ul>
          <br />
          <br />
        </div>
        <div className="code3">
          {code3()}
          <ul>
            <li>
              if (message.type = "notification") this statement is an
              assignation statement. it will not compare anything. This should written like "
              if (message.type == "notification")"
            </li>
          </ul>
        </div>
      </div>
    );


    
}
