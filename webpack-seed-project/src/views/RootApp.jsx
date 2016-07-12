import React,{ Component } from 'react';
import {KEY, VERSAO} from 'Config';

class RootApp extends Component {
  render() {
    return (
      <div style={{height:"100%", display:"table", width:"100%"}}>
        <div style={{ display:"table-row" }}>
          Header SIGCuiabá
        </div>
        <div style={{height:"100%", display:"table-row"}}>
          {this.props.children}
        </div>
        <div className="text-xs-center" style={{height:"20px", display:"table-row"}}>
          <hr/>
          <small>SIGCuiabá - Navegador Público &copy; {KEY} - Versão {VERSAO}</small>
        </div>
      </div>
    );
  }
}


export default RootApp; 