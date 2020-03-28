import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class Terminal extends Component {
	constructor(props) {
		super(props);
	}

	addNewLine(str) {
		return (
			<span>
				{<span >$ {str} </span>}
			</span>
		);
	}

	addElementToLine(element) {
		return (
			<span dangerouslySetInnerHTML={{ __html: element }} />
		);
	}

	newLine() {
		return (<br />);
	}


	render() {
		return (
			<div className="container">
			<div className="row">
			<div className="left">
			<span className="dot" style={{background: "#ED594A"}}></span>
			<span className="dot" style={{background: "#FDD800"}}></span>
			<span className="dot" style={{background: "#5AC05A"}}></span>
			</div>
			<div className="center">
			HackSC 2021
			</div>
			<div className="right">
			</div>
			</div>

			<div className="content">
				<Typing cursorClassName="cursor" cursor="|">
				  {this.addNewLine("Welcome to HackSC 2021")}
				  <br />
				  <Typing.Delay ms={1000} />
				  {this.addNewLine("This page is coming soon.")}
				  <br />
				</Typing>
			</div>

			<style jsx>{`
				.container {
					width: 50%;
					margin: 100px auto;
					border-top-left-radius: 4px;
					border-top-right-radius: 4px;
				}

				@keyframes blink {
				  0% {
				    opacity: 0;
				  }
				  40% {
				    opacity: 0;
				  }
				  50% {
				    opacity: 1;
				  }
				  90% {
				    opacity: 1;
				  }
				  100% {
				    opacity: 0;
				  }
				}

				.cursor {
					color: white;
				    animation: blink 1s 2s 2 forwards;
				}

				/* Container for columns and the top "toolbar" */
				.row {
					padding: 10px;
					background: #000;
					border-top-left-radius: 4px;
					border-top-right-radius: 4px;
					display: flex;
					border-bottom: 1px solid #1f1f1f;
				}

				/* Create three unequal columns that floats next to each other */
				.column {
					float: left;
				}

				/* Clear floats after the columns */
				.row:after {
					content: "";
					display: table;
					clear: both;
					overflow-y: scroll;
				}

				.content {
					height: 500px;
					background: #000;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
					line-height: 1.5;
					padding: 8px;
				}

				/* Three dots */
				.dot {
					margin-top: 4px;
					margin-right: 5px;
					height: 12px;
					width: 12px;
					background-color: #bbb;
					border-radius: 50%;
					display: inline-block;
				}

				.left,
				.right {
					flex: 1;
				}

				`}</style>
				</div>
				);
	}
}


export default Terminal;