import { useState } from 'react';
// import { pdfjs, Document, Page } from 'react-pdf';

import styles from './pdf.module.css';

import dynamic from 'next/dynamic';

import('react-pdf').then((reactPdf) => {
	const { pdfjs } = reactPdf;
	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
});

const Document = dynamic(
	() => import('react-pdf').then((module) => module.Document),
	{ ssr: false }
);

const Page = dynamic(() => import('react-pdf').then((module) => module.Page), {
	ssr: false,
});

export default function PDF() {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	function changePage(offset) {
		setPageNumber((prevPageNumber) => prevPageNumber + offset);
	}

	function previousPage() {
		changePage(-1);
	}

	function nextPage() {
		changePage(1);
	}

	const Navigation = () => (
		<div style={{ width: '80%', maxWidth: 800 }}>
			<p>
				Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
			</p>
			<div
				style={{ display: 'flex', justifyContent: 'space-between', margin: 0 }}
			>
				<button
					type="button"
					className={styles.button}
					disabled={pageNumber <= 1}
					onClick={previousPage}
				>
					Previous
				</button>
				<button
					type="button"
					className={styles.button}
					disabled={pageNumber >= numPages}
					onClick={nextPage}
				>
					Next
				</button>
			</div>
		</div>
	);
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<Navigation />
			<Document
				/* @ts-ignore */
				file={`/connect/HackSConnect.pdf`}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				{/* @ts-ignore */}
				<Page pageNumber={pageNumber} />
			</Document>
			<Navigation />
		</div>
	);
}
