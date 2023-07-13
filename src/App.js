import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'

function App() {

  const [openPicker, data, authResponse] = useDrivePicker();
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const handleOpenPicker = () => {
    console.log('picker handles')
    openPicker({
      clientId: clientId,
      developerKey: apiKey,
      viewId: "DOCS",
      // appId: 'titan-cleaners',
      // setParentFolder: '1uBlUhAmiptleU0iNZqWca4QazJjQwOWX',
      // token: 'ya29.a0Ael9sCPCU7f9vJPE3LkcDhTMRZQv0hlGqJTm5kTg4_O2jpUoo3jGIo_KjSM4NEinOezqP1U5c7EODRcfWSbwY_rzqauKsSi7arWaUZXcvBvoMAFa1B6hLiueo_nxPr9keLDBT611ev3yZuXYA5Rw-1rn67-3aCgYKAegSARISFQF4udJhahdhZ-eCJbUzm2eDXveMyA0163', // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customScopes: ['https://www.googleapis.com/auth/drive.file'],
      // setOrigin: 'https://accounts.google.com',
      // setParentFolder: id
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data)
      },
    })
  }

  useEffect(() => {

    if (data) {
      // data.docs.map((i) => console.log(i))
    }

  }, [data])

  return (
    <div className="App">
      <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );
}

export default App;
