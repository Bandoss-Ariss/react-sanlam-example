export default class SDKInterface {

  Generate() {
    // Instead of DOM manipulation, return JSX structure
    return (
      
      <div className="container">
       
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
             
              </div>
              <div className="modal-body">
              <iframe src="http://localhost:5000/loadSanlamSDK" title="Sanlam Document Scan" style={{ width: '100%', height: '600px' }} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal" id="scan-end">
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
