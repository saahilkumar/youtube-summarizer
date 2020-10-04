import React, { useState } from 'react';
import './App.css';
import SearchVid from './components/search';
import Summary from './components/summary';
import VideoInfo from './components/video';
import Sentiment from './components/sentiment';
import RadioButtonGroup from './components/radio-buttons';

class App extends React.Component {

  state = {
    clickedSearch: false,
    userInput: "",
    summary1: "",
    summary2: "",
    searchedVid: "",
    inputType: "Youtube",
    data: {},
    showMenu: false,
    showSummary1: true,
    transcript: "",
    sentiment: "",
    sentiment_perc: 0.0
  }

  handleClickedSearch = () => {
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://131296a1812c.ngrok.io/youtubeToText?url=" + this.state.userInput, true);
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                var js = JSON.parse(xhr.responseText)
                self.setState({
                    transcript: js.transcript,
                    clickedSearch: true,
                    searchedVid: self.state.userInput
                });

                self.getSentiment();
                self.getSummary1();
                self.getSummary2();


                return js.transcript
            } else {
                console.error(xhr.statusText)
            }
        }
    };

    xhr.onerror = function(e) {
        console.error(xhr.statusText)
    }

    xhr.send(null);

};
  // handleClickedSearch = () => {
  //   this.setState({clickedSearch: true, 
  //     summary: this.getSummary(), 
  //     searchedVid: this.state.userInput});
  // }

  handleChange = (newVal) => {
    this.setState({ userInput: newVal });
  }

  handleRadioButtonChange = (newVal) => {
    console.log(newVal);
    this.setState({ inputType: newVal })
  }

  getSentiment = () => {
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://131296a1812c.ngrok.io/sentiment?text=" + this.state.transcript, true);
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var js = JSON.parse(xhr.responseText)
                console.log(js)
                self.setState({
                    sentiment: js.label,
                    sentiment_perc: js.score
                });
                return js.transcript
            } else {
                console.error(xhr.statusText)
            }
        }
    };

    xhr.onerror = function(e) {
        console.error(xhr.statusText)
    }

    xhr.send(null);
}

  calcSentiment = () => {
    return 0.831230238123;
  }

  getSummary = () => {
    return this.state.userInput + ' Sunt esse adipisicing qui eu consequat anim ea non laboris officia ullamco eu non mollit. Voluptate adipisicing ad ut deserunt consequat quis cillum sint pariatur laborum tempor qui minim ea. Quis incididunt minim enim culpa amet irure in. Ea minim voluptate ad anim laboris. Aute reprehenderit exercitation sunt laborum tempor cillum. Deserunt magna nisi proident aute cupidatat velit anim minim ad ut. Mollit quis amet voluptate nulla aute est esse id occaecat velit tempor. Dolor ea aliqua nostrud sit proident occaecat nostrud amet magna sunt. Reprehenderit ea minim cupidatat eu. Dolore officia sit magna labore eiusmod aliquip eu. Nostrud eu fugiat in dolore officia id excepteur officia. Et ullamco dolore non elit tempor ad. Lorem reprehenderit in in ea deserunt minim proident pariatur ullamco. Nisi laboris non cillum et quis minim esse dolore id consequat eiusmod cillum proident. Consequat reprehenderit eu nostrud id. Ipsum quis sunt nostrud fugiat ut. Eu ad et nulla magna veniam enim id amet dolor. Eu sit deserunt velit qui. Voluptate magna sit amet adipisicing magna ullamco.';
  }

  getSummary1 = () => {
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://131296a1812c.ngrok.io/extract_summary?text=" + this.state.transcript, true);
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                var js = JSON.parse(xhr.responseText)
                console.log(js)
                self.setState({
                    summary1: js.summary
                });

                return js.transcript
            } else {
                console.error(xhr.statusText)
            }
        }
    };

    xhr.onerror = function(e) {
        console.error(xhr.statusText)
    }

    xhr.send(null);


    return (this.state.summary1);
};

getSummary2 = () => {
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://131296a1812c.ngrok.io/abstract_summary?text=" + this.state.transcript, true);
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                var js = JSON.parse(xhr.responseText)
                console.log(js)
                self.setState({
                    summary2: js.summary
                });

                return js.transcript
            } else {
                console.error(xhr.statusText)
            }
        }
    };

    xhr.onerror = function(e) {
        console.error(xhr.statusText)
    }

    xhr.send(null);


    return (this.state.summary1);
}

  render() {
    return (
      <main>
        <SearchVid
          clickedSearch={this.state.clickedSearch}
          videoLink={this.state.userInput}
          onClickedSearch={this.handleClickedSearch}
          onChangedInput={this.handleChange}
          inputType={this.state.inputType}/>

        <RadioButtonGroup
          clickedSearch={this.state.clickedSearch}
          onRadioButtonChange={this.handleRadioButtonChange}/>

        {this.state.clickedSearch && 
        <div>
          {this.state.inputType === "Youtube" && <VideoInfo 
            videoLink={this.state.searchedVid}/>}
          <Summary 
            clickedSearch={this.state.clickedSearch}
            inputType={this.state.inputType}
            summary={this.state.summary1}
            version={1}/>
          <Summary 
            clickedSearch={this.state.clickedSearch}
            summary={this.state.summary2}
            version={2}/>
          <Sentiment 
            sentiment={this.state.sentiment}
            value={this.state.sentiment_perc}/>
          </div>}
      </main>
    );
  }
}

export default App;
