<!DOCTYPE html>
<html>
<head>
	<style type="text/css">
		section > div{
			height: 100px;
			width: 100px;
			background-color: red;
			float: left;
			margin: 3px;
			cursor: pointer;
		}
	</style>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.29/browser.min.js"></script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react.min.js"></script>	

	<script type="text/babel">



class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);


</script>

</head>
<body>
	
	<section id='root'></section>
	
</body>
</html>
