// Data
// var data = [
// 	{"symbol": "MSFT", "date": "Jan 2000", "price": 39.81},
// 	{"symbol": "MSFT", "date": "Feb 2000", "price": 36.35},
// 	{"symbol": "MSFT", "date": "Mar 2000", "price": 43.22},
// 	{"symbol": "MSFT", "date": "Apr 2000", "price": 28.37},
// 	{"symbol": "MSFT", "date": "May 2000", "price": 25.45},
// 	{"symbol": "MSFT", "date": "Jun 2000", "price": 32.54},
// 	{"symbol": "MSFT", "date": "Jul 2000", "price": 28.4},
// 	{"symbol": "MSFT", "date": "Aug 2000", "price": 28.4},
// 	{"symbol": "MSFT", "date": "Sep 2000", "price": 24.53},
// 	{"symbol": "MSFT", "date": "Oct 2000", "price": 28.02},
// 	{"symbol": "MSFT", "date": "Nov 2000", "price": 23.34},
// 	{"symbol": "MSFT", "date": "Dec 2000", "price": 17.65},
// 	{"symbol": "MSFT", "date": "Jan 2001", "price": 24.84},
// 	{"symbol": "MSFT", "date": "Feb 2001", "price": 24},
// 	{"symbol": "MSFT", "date": "Mar 2001", "price": 22.25},
// 	{"symbol": "MSFT", "date": "Apr 2001", "price": 27.56},
// 	{"symbol": "MSFT", "date": "May 2001", "price": 28.14},
// 	{"symbol": "MSFT", "date": "Jun 2001", "price": 29.7},
// 	{"symbol": "MSFT", "date": "Jul 2001", "price": 26.93},
// 	{"symbol": "MSFT", "date": "Aug 2001", "price": 23.21},
// 	{"symbol": "MSFT", "date": "Sep 2001", "price": 20.82},
// 	{"symbol": "MSFT", "date": "Oct 2001", "price": 23.65},
// 	{"symbol": "MSFT", "date": "Nov 2001", "price": 26.12},
// 	{"symbol": "MSFT", "date": "Dec 2001", "price": 26.95},
// 	{"symbol": "MSFT", "date": "Jan 2002", "price": 25.92},
// 	{"symbol": "MSFT", "date": "Feb 2002", "price": 23.73},
// 	{"symbol": "MSFT", "date": "Mar 2002", "price": 24.53},
// 	{"symbol": "MSFT", "date": "Apr 2002", "price": 21.26},
// 	{"symbol": "MSFT", "date": "May 2002", "price": 20.71},
// 	{"symbol": "MSFT", "date": "Jun 2002", "price": 22.25},
// 	{"symbol": "MSFT", "date": "Jul 2002", "price": 19.52},
// 	{"symbol": "MSFT", "date": "Aug 2002", "price": 19.97},
// 	{"symbol": "MSFT", "date": "Sep 2002", "price": 17.79},
// 	{"symbol": "MSFT", "date": "Oct 2002", "price": 21.75},
// 	{"symbol": "MSFT", "date": "Nov 2002", "price": 23.46},
// 	{"symbol": "MSFT", "date": "Dec 2002", "price": 21.03},
// 	{"symbol": "MSFT", "date": "Jan 2003", "price": 19.31},
// 	{"symbol": "MSFT", "date": "Feb 2003", "price": 19.34},
// 	{"symbol": "MSFT", "date": "Mar 2003", "price": 19.76},
// 	{"symbol": "MSFT", "date": "Apr 2003", "price": 20.87},
// 	{"symbol": "MSFT", "date": "May 2003", "price": 20.09},
// 	{"symbol": "MSFT", "date": "Jun 2003", "price": 20.93},
// 	{"symbol": "MSFT", "date": "Jul 2003", "price": 21.56},
// 	{"symbol": "MSFT", "date": "Aug 2003", "price": 21.65},
// 	{"symbol": "MSFT", "date": "Sep 2003", "price": 22.69},
// 	{"symbol": "MSFT", "date": "Oct 2003", "price": 21.45},
// 	{"symbol": "MSFT", "date": "Nov 2003", "price": 21.1},
// 	{"symbol": "MSFT", "date": "Dec 2003", "price": 22.46},
// 	{"symbol": "MSFT", "date": "Jan 2004", "price": 22.69},
// 	{"symbol": "MSFT", "date": "Feb 2004", "price": 21.77},
// 	{"symbol": "MSFT", "date": "Mar 2004", "price": 20.46},
// 	{"symbol": "MSFT", "date": "Apr 2004", "price": 21.45},
// 	{"symbol": "MSFT", "date": "May 2004", "price": 21.53},
// 	{"symbol": "MSFT", "date": "Jun 2004", "price": 23.44},
// 	{"symbol": "MSFT", "date": "Jul 2004", "price": 23.38},
// 	{"symbol": "MSFT", "date": "Aug 2004", "price": 22.47},
// 	{"symbol": "MSFT", "date": "Sep 2004", "price": 22.76},
// 	{"symbol": "MSFT", "date": "Oct 2004", "price": 23.02},
// 	{"symbol": "MSFT", "date": "Nov 2004", "price": 24.6},
// 	{"symbol": "MSFT", "date": "Dec 2004", "price": 24.52},
// 	{"symbol": "MSFT", "date": "Jan 2005", "price": 24.11},
// 	{"symbol": "MSFT", "date": "Feb 2005", "price": 23.15},
// 	{"symbol": "MSFT", "date": "Mar 2005", "price": 22.24},
// 	{"symbol": "MSFT", "date": "Apr 2005", "price": 23.28},
// 	{"symbol": "MSFT", "date": "May 2005", "price": 23.82},
// 	{"symbol": "MSFT", "date": "Jun 2005", "price": 22.93},
// 	{"symbol": "MSFT", "date": "Jul 2005", "price": 23.64},
// 	{"symbol": "MSFT", "date": "Aug 2005", "price": 25.35},
// 	{"symbol": "MSFT", "date": "Sep 2005", "price": 23.83},
// 	{"symbol": "MSFT", "date": "Oct 2005", "price": 23.8},
// 	{"symbol": "MSFT", "date": "Nov 2005", "price": 25.71},
// 	{"symbol": "MSFT", "date": "Dec 2005", "price": 24.29},
// 	{"symbol": "MSFT", "date": "Jan 2006", "price": 26.14},
// 	{"symbol": "MSFT", "date": "Feb 2006", "price": 25.04},
// 	{"symbol": "MSFT", "date": "Mar 2006", "price": 25.36},
// 	{"symbol": "MSFT", "date": "Apr 2006", "price": 22.5},
// 	{"symbol": "MSFT", "date": "May 2006", "price": 21.19},
// 	{"symbol": "MSFT", "date": "Jun 2006", "price": 21.8},
// 	{"symbol": "MSFT", "date": "Jul 2006", "price": 22.51},
// 	{"symbol": "MSFT", "date": "Aug 2006", "price": 24.13},
// 	{"symbol": "MSFT", "date": "Sep 2006", "price": 25.68},
// 	{"symbol": "MSFT", "date": "Oct 2006", "price": 26.96},
// 	{"symbol": "MSFT", "date": "Nov 2006", "price": 27.66},
// 	{"symbol": "MSFT", "date": "Dec 2006", "price": 28.13},
// 	{"symbol": "MSFT", "date": "Jan 2007", "price": 29.07},
// 	{"symbol": "MSFT", "date": "Feb 2007", "price": 26.63},
// 	{"symbol": "MSFT", "date": "Mar 2007", "price": 26.35},
// 	{"symbol": "MSFT", "date": "Apr 2007", "price": 28.3},
// 	{"symbol": "MSFT", "date": "May 2007", "price": 29.11},
// 	{"symbol": "MSFT", "date": "Jun 2007", "price": 27.95},
// 	{"symbol": "MSFT", "date": "Jul 2007", "price": 27.5},
// 	{"symbol": "MSFT", "date": "Aug 2007", "price": 27.34},
// 	{"symbol": "MSFT", "date": "Sep 2007", "price": 28.04},
// 	{"symbol": "MSFT", "date": "Oct 2007", "price": 35.03},
// 	{"symbol": "MSFT", "date": "Nov 2007", "price": 32.09},
// 	{"symbol": "MSFT", "date": "Dec 2007", "price": 34},
// 	{"symbol": "MSFT", "date": "Jan 2008", "price": 31.13},
// 	{"symbol": "MSFT", "date": "Feb 2008", "price": 26.07},
// 	{"symbol": "MSFT", "date": "Mar 2008", "price": 27.21},
// 	{"symbol": "MSFT", "date": "Apr 2008", "price": 27.34},
// 	{"symbol": "MSFT", "date": "May 2008", "price": 27.25},
// 	{"symbol": "MSFT", "date": "Jun 2008", "price": 26.47},
// 	{"symbol": "MSFT", "date": "Jul 2008", "price": 24.75},
// 	{"symbol": "MSFT", "date": "Aug 2008", "price": 26.36},
// 	{"symbol": "MSFT", "date": "Sep 2008", "price": 25.78},
// 	{"symbol": "MSFT", "date": "Oct 2008", "price": 21.57},
// 	{"symbol": "MSFT", "date": "Nov 2008", "price": 19.66},
// 	{"symbol": "MSFT", "date": "Dec 2008", "price": 18.91},
// 	{"symbol": "MSFT", "date": "Jan 2009", "price": 16.63},
// 	{"symbol": "MSFT", "date": "Feb 2009", "price": 15.81},
// 	{"symbol": "MSFT", "date": "Mar 2009", "price": 17.99},
// 	{"symbol": "MSFT", "date": "Apr 2009", "price": 19.84},
// 	{"symbol": "MSFT", "date": "May 2009", "price": 20.59},
// 	{"symbol": "MSFT", "date": "Jun 2009", "price": 23.42},
// 	{"symbol": "MSFT", "date": "Jul 2009", "price": 23.18},
// 	{"symbol": "MSFT", "date": "Aug 2009", "price": 24.43},
// 	{"symbol": "MSFT", "date": "Sep 2009", "price": 25.49},
// 	{"symbol": "MSFT", "date": "Oct 2009", "price": 27.48},
// 	{"symbol": "MSFT", "date": "Nov 2009", "price": 29.27},
// 	{"symbol": "MSFT", "date": "Dec 2009", "price": 30.34},
// 	{"symbol": "MSFT", "date": "Jan 2010", "price": 28.05},
// 	{"symbol": "MSFT", "date": "Feb 2010", "price": 28.67},
// 	{"symbol": "MSFT", "date": "Mar 2010", "price": 28.8},
// 	{"symbol": "AMZN", "date": "Jan 2000", "price": 64.56},
// 	{"symbol": "AMZN", "date": "Feb 2000", "price": 68.87},
// 	{"symbol": "AMZN", "date": "Mar 2000", "price": 67},
// 	{"symbol": "AMZN", "date": "Apr 2000", "price": 55.19},
// 	{"symbol": "AMZN", "date": "May 2000", "price": 48.31},
// 	{"symbol": "AMZN", "date": "Jun 2000", "price": 36.31},
// 	{"symbol": "AMZN", "date": "Jul 2000", "price": 30.12},
// 	{"symbol": "AMZN", "date": "Aug 2000", "price": 41.5},
// 	{"symbol": "AMZN", "date": "Sep 2000", "price": 38.44},
// 	{"symbol": "AMZN", "date": "Oct 2000", "price": 36.62},
// 	{"symbol": "AMZN", "date": "Nov 2000", "price": 24.69},
// 	{"symbol": "AMZN", "date": "Dec 2000", "price": 15.56},
// 	{"symbol": "AMZN", "date": "Jan 2001", "price": 17.31},
// 	{"symbol": "AMZN", "date": "Feb 2001", "price": 10.19},
// 	{"symbol": "AMZN", "date": "Mar 2001", "price": 10.23},
// 	{"symbol": "AMZN", "date": "Apr 2001", "price": 15.78},
// 	{"symbol": "AMZN", "date": "May 2001", "price": 16.69},
// 	{"symbol": "AMZN", "date": "Jun 2001", "price": 14.15},
// 	{"symbol": "AMZN", "date": "Jul 2001", "price": 12.49},
// 	{"symbol": "AMZN", "date": "Aug 2001", "price": 8.94},
// 	{"symbol": "AMZN", "date": "Sep 2001", "price": 5.97},
// 	{"symbol": "AMZN", "date": "Oct 2001", "price": 6.98},
// 	{"symbol": "AMZN", "date": "Nov 2001", "price": 11.32},
// 	{"symbol": "AMZN", "date": "Dec 2001", "price": 10.82},
// 	{"symbol": "AMZN", "date": "Jan 2002", "price": 14.19},
// 	{"symbol": "AMZN", "date": "Feb 2002", "price": 14.1},
// 	{"symbol": "AMZN", "date": "Mar 2002", "price": 14.3},
// 	{"symbol": "AMZN", "date": "Apr 2002", "price": 16.69},
// 	{"symbol": "AMZN", "date": "May 2002", "price": 18.23},
// 	{"symbol": "AMZN", "date": "Jun 2002", "price": 16.25},
// 	{"symbol": "AMZN", "date": "Jul 2002", "price": 14.45},
// 	{"symbol": "AMZN", "date": "Aug 2002", "price": 14.94},
// 	{"symbol": "AMZN", "date": "Sep 2002", "price": 15.93},
// 	{"symbol": "AMZN", "date": "Oct 2002", "price": 19.36},
// 	{"symbol": "AMZN", "date": "Nov 2002", "price": 23.35},
// 	{"symbol": "AMZN", "date": "Dec 2002", "price": 18.89},
// 	{"symbol": "AMZN", "date": "Jan 2003", "price": 21.85},
// 	{"symbol": "AMZN", "date": "Feb 2003", "price": 22.01},
// 	{"symbol": "AMZN", "date": "Mar 2003", "price": 26.03},
// 	{"symbol": "AMZN", "date": "Apr 2003", "price": 28.69},
// 	{"symbol": "AMZN", "date": "May 2003", "price": 35.89},
// 	{"symbol": "AMZN", "date": "Jun 2003", "price": 36.32},
// 	{"symbol": "AMZN", "date": "Jul 2003", "price": 41.64},
// 	{"symbol": "AMZN", "date": "Aug 2003", "price": 46.32},
// 	{"symbol": "AMZN", "date": "Sep 2003", "price": 48.43},
// 	{"symbol": "AMZN", "date": "Oct 2003", "price": 54.43},
// 	{"symbol": "AMZN", "date": "Nov 2003", "price": 53.97},
// 	{"symbol": "AMZN", "date": "Dec 2003", "price": 52.62},
// 	{"symbol": "AMZN", "date": "Jan 2004", "price": 50.4},
// 	{"symbol": "AMZN", "date": "Feb 2004", "price": 43.01},
// 	{"symbol": "AMZN", "date": "Mar 2004", "price": 43.28},
// 	{"symbol": "AMZN", "date": "Apr 2004", "price": 43.6},
// 	{"symbol": "AMZN", "date": "May 2004", "price": 48.5},
// 	{"symbol": "AMZN", "date": "Jun 2004", "price": 54.4},
// 	{"symbol": "AMZN", "date": "Jul 2004", "price": 38.92},
// 	{"symbol": "AMZN", "date": "Aug 2004", "price": 38.14},
// 	{"symbol": "AMZN", "date": "Sep 2004", "price": 40.86},
// 	{"symbol": "AMZN", "date": "Oct 2004", "price": 34.13},
// 	{"symbol": "AMZN", "date": "Nov 2004", "price": 39.68},
// 	{"symbol": "AMZN", "date": "Dec 2004", "price": 44.29},
// 	{"symbol": "AMZN", "date": "Jan 2005", "price": 43.22},
// 	{"symbol": "AMZN", "date": "Feb 2005", "price": 35.18},
// 	{"symbol": "AMZN", "date": "Mar 2005", "price": 34.27},
// 	{"symbol": "AMZN", "date": "Apr 2005", "price": 32.36},
// 	{"symbol": "AMZN", "date": "May 2005", "price": 35.51},
// 	{"symbol": "AMZN", "date": "Jun 2005", "price": 33.09},
// 	{"symbol": "AMZN", "date": "Jul 2005", "price": 45.15},
// 	{"symbol": "AMZN", "date": "Aug 2005", "price": 42.7},
// 	{"symbol": "AMZN", "date": "Sep 2005", "price": 45.3},
// 	{"symbol": "AMZN", "date": "Oct 2005", "price": 39.86},
// 	{"symbol": "AMZN", "date": "Nov 2005", "price": 48.46},
// 	{"symbol": "AMZN", "date": "Dec 2005", "price": 47.15},
// 	{"symbol": "AMZN", "date": "Jan 2006", "price": 44.82},
// 	{"symbol": "AMZN", "date": "Feb 2006", "price": 37.44},
// 	{"symbol": "AMZN", "date": "Mar 2006", "price": 36.53},
// 	{"symbol": "AMZN", "date": "Apr 2006", "price": 35.21},
// 	{"symbol": "AMZN", "date": "May 2006", "price": 34.61},
// 	{"symbol": "AMZN", "date": "Jun 2006", "price": 38.68},
// 	{"symbol": "AMZN", "date": "Jul 2006", "price": 26.89},
// 	{"symbol": "AMZN", "date": "Aug 2006", "price": 30.83},
// 	{"symbol": "AMZN", "date": "Sep 2006", "price": 32.12},
// 	{"symbol": "AMZN", "date": "Oct 2006", "price": 38.09},
// 	{"symbol": "AMZN", "date": "Nov 2006", "price": 40.34},
// 	{"symbol": "AMZN", "date": "Dec 2006", "price": 39.46},
// 	{"symbol": "AMZN", "date": "Jan 2007", "price": 37.67},
// 	{"symbol": "AMZN", "date": "Feb 2007", "price": 39.14},
// 	{"symbol": "AMZN", "date": "Mar 2007", "price": 39.79},
// 	{"symbol": "AMZN", "date": "Apr 2007", "price": 61.33},
// 	{"symbol": "AMZN", "date": "May 2007", "price": 69.14},
// 	{"symbol": "AMZN", "date": "Jun 2007", "price": 68.41},
// 	{"symbol": "AMZN", "date": "Jul 2007", "price": 78.54},
// 	{"symbol": "AMZN", "date": "Aug 2007", "price": 79.91},
// 	{"symbol": "AMZN", "date": "Sep 2007", "price": 93.15},
// 	{"symbol": "AMZN", "date": "Oct 2007", "price": 89.15},
// 	{"symbol": "AMZN", "date": "Nov 2007", "price": 90.56},
// 	{"symbol": "AMZN", "date": "Dec 2007", "price": 92.64},
// 	{"symbol": "AMZN", "date": "Jan 2008", "price": 77.7},
// 	{"symbol": "AMZN", "date": "Feb 2008", "price": 64.47},
// 	{"symbol": "AMZN", "date": "Mar 2008", "price": 71.3},
// 	{"symbol": "AMZN", "date": "Apr 2008", "price": 78.63},
// 	{"symbol": "AMZN", "date": "May 2008", "price": 81.62},
// 	{"symbol": "AMZN", "date": "Jun 2008", "price": 73.33},
// 	{"symbol": "AMZN", "date": "Jul 2008", "price": 76.34},
// 	{"symbol": "AMZN", "date": "Aug 2008", "price": 80.81},
// 	{"symbol": "AMZN", "date": "Sep 2008", "price": 72.76},
// 	{"symbol": "AMZN", "date": "Oct 2008", "price": 57.24},
// 	{"symbol": "AMZN", "date": "Nov 2008", "price": 42.7},
// 	{"symbol": "AMZN", "date": "Dec 2008", "price": 51.28},
// 	{"symbol": "AMZN", "date": "Jan 2009", "price": 58.82},
// 	{"symbol": "AMZN", "date": "Feb 2009", "price": 64.79},
// 	{"symbol": "AMZN", "date": "Mar 2009", "price": 73.44},
// 	{"symbol": "AMZN", "date": "Apr 2009", "price": 80.52},
// 	{"symbol": "AMZN", "date": "May 2009", "price": 77.99},
// 	{"symbol": "AMZN", "date": "Jun 2009", "price": 83.66},
// 	{"symbol": "AMZN", "date": "Jul 2009", "price": 85.76},
// 	{"symbol": "AMZN", "date": "Aug 2009", "price": 81.19},
// 	{"symbol": "AMZN", "date": "Sep 2009", "price": 93.36},
// 	{"symbol": "AMZN", "date": "Oct 2009", "price": 118.81},
// 	{"symbol": "AMZN", "date": "Nov 2009", "price": 135.91},
// 	{"symbol": "AMZN", "date": "Dec 2009", "price": 134.52},
// 	{"symbol": "AMZN", "date": "Jan 2010", "price": 125.41},
// 	{"symbol": "AMZN", "date": "Feb 2010", "price": 118.4},
// 	{"symbol": "AMZN", "date": "Mar 2010", "price": 128.82},
// 	{"symbol": "IBM", "date": "Jan 2000", "price": 100.52},
// 	{"symbol": "IBM", "date": "Feb 2000", "price": 92.11},
// 	{"symbol": "IBM", "date": "Mar 2000", "price": 106.11},
// 	{"symbol": "IBM", "date": "Apr 2000", "price": 99.95},
// 	{"symbol": "IBM", "date": "May 2000", "price": 96.31},
// 	{"symbol": "IBM", "date": "Jun 2000", "price": 98.33},
// 	{"symbol": "IBM", "date": "Jul 2000", "price": 100.74},
// 	{"symbol": "IBM", "date": "Aug 2000", "price": 118.62},
// 	{"symbol": "IBM", "date": "Sep 2000", "price": 101.19},
// 	{"symbol": "IBM", "date": "Oct 2000", "price": 88.5},
// 	{"symbol": "IBM", "date": "Nov 2000", "price": 84.12},
// 	{"symbol": "IBM", "date": "Dec 2000", "price": 76.47},
// 	{"symbol": "IBM", "date": "Jan 2001", "price": 100.76},
// 	{"symbol": "IBM", "date": "Feb 2001", "price": 89.98},
// 	{"symbol": "IBM", "date": "Mar 2001", "price": 86.63},
// 	{"symbol": "IBM", "date": "Apr 2001", "price": 103.7},
// 	{"symbol": "IBM", "date": "May 2001", "price": 100.82},
// 	{"symbol": "IBM", "date": "Jun 2001", "price": 102.35},
// 	{"symbol": "IBM", "date": "Jul 2001", "price": 94.87},
// 	{"symbol": "IBM", "date": "Aug 2001", "price": 90.25},
// 	{"symbol": "IBM", "date": "Sep 2001", "price": 82.82},
// 	{"symbol": "IBM", "date": "Oct 2001", "price": 97.58},
// 	{"symbol": "IBM", "date": "Nov 2001", "price": 104.5},
// 	{"symbol": "IBM", "date": "Dec 2001", "price": 109.36},
// 	{"symbol": "IBM", "date": "Jan 2002", "price": 97.54},
// 	{"symbol": "IBM", "date": "Feb 2002", "price": 88.82},
// 	{"symbol": "IBM", "date": "Mar 2002", "price": 94.15},
// 	{"symbol": "IBM", "date": "Apr 2002", "price": 75.82},
// 	{"symbol": "IBM", "date": "May 2002", "price": 72.97},
// 	{"symbol": "IBM", "date": "Jun 2002", "price": 65.31},
// 	{"symbol": "IBM", "date": "Jul 2002", "price": 63.86},
// 	{"symbol": "IBM", "date": "Aug 2002", "price": 68.52},
// 	{"symbol": "IBM", "date": "Sep 2002", "price": 53.01},
// 	{"symbol": "IBM", "date": "Oct 2002", "price": 71.76},
// 	{"symbol": "IBM", "date": "Nov 2002", "price": 79.16},
// 	{"symbol": "IBM", "date": "Dec 2002", "price": 70.58},
// 	{"symbol": "IBM", "date": "Jan 2003", "price": 71.22},
// 	{"symbol": "IBM", "date": "Feb 2003", "price": 71.13},
// 	{"symbol": "IBM", "date": "Mar 2003", "price": 71.57},
// 	{"symbol": "IBM", "date": "Apr 2003", "price": 77.47},
// 	{"symbol": "IBM", "date": "May 2003", "price": 80.48},
// 	{"symbol": "IBM", "date": "Jun 2003", "price": 75.42},
// 	{"symbol": "IBM", "date": "Jul 2003", "price": 74.28},
// 	{"symbol": "IBM", "date": "Aug 2003", "price": 75.12},
// 	{"symbol": "IBM", "date": "Sep 2003", "price": 80.91},
// 	{"symbol": "IBM", "date": "Oct 2003", "price": 81.96},
// 	{"symbol": "IBM", "date": "Nov 2003", "price": 83.08},
// 	{"symbol": "IBM", "date": "Dec 2003", "price": 85.05},
// 	{"symbol": "IBM", "date": "Jan 2004", "price": 91.06},
// 	{"symbol": "IBM", "date": "Feb 2004", "price": 88.7},
// 	{"symbol": "IBM", "date": "Mar 2004", "price": 84.41},
// 	{"symbol": "IBM", "date": "Apr 2004", "price": 81.04},
// 	{"symbol": "IBM", "date": "May 2004", "price": 81.59},
// 	{"symbol": "IBM", "date": "Jun 2004", "price": 81.19},
// 	{"symbol": "IBM", "date": "Jul 2004", "price": 80.19},
// 	{"symbol": "IBM", "date": "Aug 2004", "price": 78.17},
// 	{"symbol": "IBM", "date": "Sep 2004", "price": 79.13},
// 	{"symbol": "IBM", "date": "Oct 2004", "price": 82.84},
// 	{"symbol": "IBM", "date": "Nov 2004", "price": 87.15},
// 	{"symbol": "IBM", "date": "Dec 2004", "price": 91.16},
// 	{"symbol": "IBM", "date": "Jan 2005", "price": 86.39},
// 	{"symbol": "IBM", "date": "Feb 2005", "price": 85.78},
// 	{"symbol": "IBM", "date": "Mar 2005", "price": 84.66},
// 	{"symbol": "IBM", "date": "Apr 2005", "price": 70.77},
// 	{"symbol": "IBM", "date": "May 2005", "price": 70.18},
// 	{"symbol": "IBM", "date": "Jun 2005", "price": 68.93},
// 	{"symbol": "IBM", "date": "Jul 2005", "price": 77.53},
// 	{"symbol": "IBM", "date": "Aug 2005", "price": 75.07},
// 	{"symbol": "IBM", "date": "Sep 2005", "price": 74.7},
// 	{"symbol": "IBM", "date": "Oct 2005", "price": 76.25},
// 	{"symbol": "IBM", "date": "Nov 2005", "price": 82.98},
// 	{"symbol": "IBM", "date": "Dec 2005", "price": 76.73},
// 	{"symbol": "IBM", "date": "Jan 2006", "price": 75.89},
// 	{"symbol": "IBM", "date": "Feb 2006", "price": 75.09},
// 	{"symbol": "IBM", "date": "Mar 2006", "price": 77.17},
// 	{"symbol": "IBM", "date": "Apr 2006", "price": 77.05},
// 	{"symbol": "IBM", "date": "May 2006", "price": 75.04},
// 	{"symbol": "IBM", "date": "Jun 2006", "price": 72.15},
// 	{"symbol": "IBM", "date": "Jul 2006", "price": 72.7},
// 	{"symbol": "IBM", "date": "Aug 2006", "price": 76.35},
// 	{"symbol": "IBM", "date": "Sep 2006", "price": 77.26},
// 	{"symbol": "IBM", "date": "Oct 2006", "price": 87.06},
// 	{"symbol": "IBM", "date": "Nov 2006", "price": 86.95},
// 	{"symbol": "IBM", "date": "Dec 2006", "price": 91.9},
// 	{"symbol": "IBM", "date": "Jan 2007", "price": 93.79},
// 	{"symbol": "IBM", "date": "Feb 2007", "price": 88.18},
// 	{"symbol": "IBM", "date": "Mar 2007", "price": 89.44},
// 	{"symbol": "IBM", "date": "Apr 2007", "price": 96.98},
// 	{"symbol": "IBM", "date": "May 2007", "price": 101.54},
// 	{"symbol": "IBM", "date": "Jun 2007", "price": 100.25},
// 	{"symbol": "IBM", "date": "Jul 2007", "price": 105.4},
// 	{"symbol": "IBM", "date": "Aug 2007", "price": 111.54},
// 	{"symbol": "IBM", "date": "Sep 2007", "price": 112.6},
// 	{"symbol": "IBM", "date": "Oct 2007", "price": 111},
// 	{"symbol": "IBM", "date": "Nov 2007", "price": 100.9},
// 	{"symbol": "IBM", "date": "Dec 2007", "price": 103.7},
// 	{"symbol": "IBM", "date": "Jan 2008", "price": 102.75},
// 	{"symbol": "IBM", "date": "Feb 2008", "price": 109.64},
// 	{"symbol": "IBM", "date": "Mar 2008", "price": 110.87},
// 	{"symbol": "IBM", "date": "Apr 2008", "price": 116.23},
// 	{"symbol": "IBM", "date": "May 2008", "price": 125.14},
// 	{"symbol": "IBM", "date": "Jun 2008", "price": 114.6},
// 	{"symbol": "IBM", "date": "Jul 2008", "price": 123.74},
// 	{"symbol": "IBM", "date": "Aug 2008", "price": 118.16},
// 	{"symbol": "IBM", "date": "Sep 2008", "price": 113.53},
// 	{"symbol": "IBM", "date": "Oct 2008", "price": 90.24},
// 	{"symbol": "IBM", "date": "Nov 2008", "price": 79.65},
// 	{"symbol": "IBM", "date": "Dec 2008", "price": 82.15},
// 	{"symbol": "IBM", "date": "Jan 2009", "price": 89.46},
// 	{"symbol": "IBM", "date": "Feb 2009", "price": 90.32},
// 	{"symbol": "IBM", "date": "Mar 2009", "price": 95.09},
// 	{"symbol": "IBM", "date": "Apr 2009", "price": 101.29},
// 	{"symbol": "IBM", "date": "May 2009", "price": 104.85},
// 	{"symbol": "IBM", "date": "Jun 2009", "price": 103.01},
// 	{"symbol": "IBM", "date": "Jul 2009", "price": 116.34},
// 	{"symbol": "IBM", "date": "Aug 2009", "price": 117},
// 	{"symbol": "IBM", "date": "Sep 2009", "price": 118.55},
// 	{"symbol": "IBM", "date": "Oct 2009", "price": 119.54},
// 	{"symbol": "IBM", "date": "Nov 2009", "price": 125.79},
// 	{"symbol": "IBM", "date": "Dec 2009", "price": 130.32},
// 	{"symbol": "IBM", "date": "Jan 2010", "price": 121.85},
// 	{"symbol": "IBM", "date": "Feb 2010", "price": 127.16},
// 	{"symbol": "IBM", "date": "Mar 2010", "price": 125.55},
// 	{"symbol": "AAPL", "date": "Jan 2000", "price": 25.94},
// 	{"symbol": "AAPL", "date": "Feb 2000", "price": 28.66},
// 	{"symbol": "AAPL", "date": "Mar 2000", "price": 33.95},
// 	{"symbol": "AAPL", "date": "Apr 2000", "price": 31.01},
// 	{"symbol": "AAPL", "date": "May 2000", "price": 21},
// 	{"symbol": "AAPL", "date": "Jun 2000", "price": 26.19},
// 	{"symbol": "AAPL", "date": "Jul 2000", "price": 25.41},
// 	{"symbol": "AAPL", "date": "Aug 2000", "price": 30.47},
// 	{"symbol": "AAPL", "date": "Sep 2000", "price": 12.88},
// 	{"symbol": "AAPL", "date": "Oct 2000", "price": 9.78},
// 	{"symbol": "AAPL", "date": "Nov 2000", "price": 8.25},
// 	{"symbol": "AAPL", "date": "Dec 2000", "price": 7.44},
// 	{"symbol": "AAPL", "date": "Jan 2001", "price": 10.81},
// 	{"symbol": "AAPL", "date": "Feb 2001", "price": 9.12},
// 	{"symbol": "AAPL", "date": "Mar 2001", "price": 11.03},
// 	{"symbol": "AAPL", "date": "Apr 2001", "price": 12.74},
// 	{"symbol": "AAPL", "date": "May 2001", "price": 9.98},
// 	{"symbol": "AAPL", "date": "Jun 2001", "price": 11.62},
// 	{"symbol": "AAPL", "date": "Jul 2001", "price": 9.4},
// 	{"symbol": "AAPL", "date": "Aug 2001", "price": 9.27},
// 	{"symbol": "AAPL", "date": "Sep 2001", "price": 7.76},
// 	{"symbol": "AAPL", "date": "Oct 2001", "price": 8.78},
// 	{"symbol": "AAPL", "date": "Nov 2001", "price": 10.65},
// 	{"symbol": "AAPL", "date": "Dec 2001", "price": 10.95},
// 	{"symbol": "AAPL", "date": "Jan 2002", "price": 12.36},
// 	{"symbol": "AAPL", "date": "Feb 2002", "price": 10.85},
// 	{"symbol": "AAPL", "date": "Mar 2002", "price": 11.84},
// 	{"symbol": "AAPL", "date": "Apr 2002", "price": 12.14},
// 	{"symbol": "AAPL", "date": "May 2002", "price": 11.65},
// 	{"symbol": "AAPL", "date": "Jun 2002", "price": 8.86},
// 	{"symbol": "AAPL", "date": "Jul 2002", "price": 7.63},
// 	{"symbol": "AAPL", "date": "Aug 2002", "price": 7.38},
// 	{"symbol": "AAPL", "date": "Sep 2002", "price": 7.25},
// 	{"symbol": "AAPL", "date": "Oct 2002", "price": 8.03},
// 	{"symbol": "AAPL", "date": "Nov 2002", "price": 7.75},
// 	{"symbol": "AAPL", "date": "Dec 2002", "price": 7.16},
// 	{"symbol": "AAPL", "date": "Jan 2003", "price": 7.18},
// 	{"symbol": "AAPL", "date": "Feb 2003", "price": 7.51},
// 	{"symbol": "AAPL", "date": "Mar 2003", "price": 7.07},
// 	{"symbol": "AAPL", "date": "Apr 2003", "price": 7.11},
// 	{"symbol": "AAPL", "date": "May 2003", "price": 8.98},
// 	{"symbol": "AAPL", "date": "Jun 2003", "price": 9.53},
// 	{"symbol": "AAPL", "date": "Jul 2003", "price": 10.54},
// 	{"symbol": "AAPL", "date": "Aug 2003", "price": 11.31},
// 	{"symbol": "AAPL", "date": "Sep 2003", "price": 10.36},
// 	{"symbol": "AAPL", "date": "Oct 2003", "price": 11.44},
// 	{"symbol": "AAPL", "date": "Nov 2003", "price": 10.45},
// 	{"symbol": "AAPL", "date": "Dec 2003", "price": 10.69},
// 	{"symbol": "AAPL", "date": "Jan 2004", "price": 11.28},
// 	{"symbol": "AAPL", "date": "Feb 2004", "price": 11.96},
// 	{"symbol": "AAPL", "date": "Mar 2004", "price": 13.52},
// 	{"symbol": "AAPL", "date": "Apr 2004", "price": 12.89},
// 	{"symbol": "AAPL", "date": "May 2004", "price": 14.03},
// 	{"symbol": "AAPL", "date": "Jun 2004", "price": 16.27},
// 	{"symbol": "AAPL", "date": "Jul 2004", "price": 16.17},
// 	{"symbol": "AAPL", "date": "Aug 2004", "price": 17.25},
// 	{"symbol": "AAPL", "date": "Sep 2004", "price": 19.38},
// 	{"symbol": "AAPL", "date": "Oct 2004", "price": 26.2},
// 	{"symbol": "AAPL", "date": "Nov 2004", "price": 33.53},
// 	{"symbol": "AAPL", "date": "Dec 2004", "price": 32.2},
// 	{"symbol": "AAPL", "date": "Jan 2005", "price": 38.45},
// 	{"symbol": "AAPL", "date": "Feb 2005", "price": 44.86},
// 	{"symbol": "AAPL", "date": "Mar 2005", "price": 41.67},
// 	{"symbol": "AAPL", "date": "Apr 2005", "price": 36.06},
// 	{"symbol": "AAPL", "date": "May 2005", "price": 39.76},
// 	{"symbol": "AAPL", "date": "Jun 2005", "price": 36.81},
// 	{"symbol": "AAPL", "date": "Jul 2005", "price": 42.65},
// 	{"symbol": "AAPL", "date": "Aug 2005", "price": 46.89},
// 	{"symbol": "AAPL", "date": "Sep 2005", "price": 53.61},
// 	{"symbol": "AAPL", "date": "Oct 2005", "price": 57.59},
// 	{"symbol": "AAPL", "date": "Nov 2005", "price": 67.82},
// 	{"symbol": "AAPL", "date": "Dec 2005", "price": 71.89},
// 	{"symbol": "AAPL", "date": "Jan 2006", "price": 75.51},
// 	{"symbol": "AAPL", "date": "Feb 2006", "price": 68.49},
// 	{"symbol": "AAPL", "date": "Mar 2006", "price": 62.72},
// 	{"symbol": "AAPL", "date": "Apr 2006", "price": 70.39},
// 	{"symbol": "AAPL", "date": "May 2006", "price": 59.77},
// 	{"symbol": "AAPL", "date": "Jun 2006", "price": 57.27},
// 	{"symbol": "AAPL", "date": "Jul 2006", "price": 67.96},
// 	{"symbol": "AAPL", "date": "Aug 2006", "price": 67.85},
// 	{"symbol": "AAPL", "date": "Sep 2006", "price": 76.98},
// 	{"symbol": "AAPL", "date": "Oct 2006", "price": 81.08},
// 	{"symbol": "AAPL", "date": "Nov 2006", "price": 91.66},
// 	{"symbol": "AAPL", "date": "Dec 2006", "price": 84.84},
// 	{"symbol": "AAPL", "date": "Jan 2007", "price": 85.73},
// 	{"symbol": "AAPL", "date": "Feb 2007", "price": 84.61},
// 	{"symbol": "AAPL", "date": "Mar 2007", "price": 92.91},
// 	{"symbol": "AAPL", "date": "Apr 2007", "price": 99.8},
// 	{"symbol": "AAPL", "date": "May 2007", "price": 121.19},
// 	{"symbol": "AAPL", "date": "Jun 2007", "price": 122.04},
// 	{"symbol": "AAPL", "date": "Jul 2007", "price": 131.76},
// 	{"symbol": "AAPL", "date": "Aug 2007", "price": 138.48},
// 	{"symbol": "AAPL", "date": "Sep 2007", "price": 153.47},
// 	{"symbol": "AAPL", "date": "Oct 2007", "price": 189.95},
// 	{"symbol": "AAPL", "date": "Nov 2007", "price": 182.22},
// 	{"symbol": "AAPL", "date": "Dec 2007", "price": 198.08},
// 	{"symbol": "AAPL", "date": "Jan 2008", "price": 135.36},
// 	{"symbol": "AAPL", "date": "Feb 2008", "price": 125.02},
// 	{"symbol": "AAPL", "date": "Mar 2008", "price": 143.5},
// 	{"symbol": "AAPL", "date": "Apr 2008", "price": 173.95},
// 	{"symbol": "AAPL", "date": "May 2008", "price": 188.75},
// 	{"symbol": "AAPL", "date": "Jun 2008", "price": 167.44},
// 	{"symbol": "AAPL", "date": "Jul 2008", "price": 158.95},
// 	{"symbol": "AAPL", "date": "Aug 2008", "price": 169.53},
// 	{"symbol": "AAPL", "date": "Sep 2008", "price": 113.66},
// 	{"symbol": "AAPL", "date": "Oct 2008", "price": 107.59},
// 	{"symbol": "AAPL", "date": "Nov 2008", "price": 92.67},
// 	{"symbol": "AAPL", "date": "Dec 2008", "price": 85.35},
// 	{"symbol": "AAPL", "date": "Jan 2009", "price": 90.13},
// 	{"symbol": "AAPL", "date": "Feb 2009", "price": 89.31},
// 	{"symbol": "AAPL", "date": "Mar 2009", "price": 105.12},
// 	{"symbol": "AAPL", "date": "Apr 2009", "price": 125.83},
// 	{"symbol": "AAPL", "date": "May 2009", "price": 135.81},
// 	{"symbol": "AAPL", "date": "Jun 2009", "price": 142.43},
// 	{"symbol": "AAPL", "date": "Jul 2009", "price": 163.39},
// 	{"symbol": "AAPL", "date": "Aug 2009", "price": 168.21},
// 	{"symbol": "AAPL", "date": "Sep 2009", "price": 185.35},
// 	{"symbol": "AAPL", "date": "Oct 2009", "price": 188.5},
// 	{"symbol": "AAPL", "date": "Nov 2009", "price": 199.91},
// 	{"symbol": "AAPL", "date": "Dec 2009", "price": 210.73},
// 	{"symbol": "AAPL", "date": "Jan 2010", "price": 192.06},
// 	{"symbol": "AAPL", "date": "Feb 2010", "price": 204.62},
// 	{"symbol": "AAPL", "date": "Mar 2010", "price": 223.02}
// ];
var m = [20, 20, 30, 20],
    w = 960 - m[1] - m[3],
    h = 500 - m[0] - m[2];

var x,
    y,
    duration = 1500,
    delay = 500;

var color = d3.scale.category10();

var svg = d3.select("#body-map").append("svg")
    .attr("width", w + m[1] + m[3])
    .attr("height", h + m[0] + m[2])
  .append("g")
    .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

var stocks,
    symbols;

// A line generator, for the dark stroke.
var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.price); });

// A line generator, for the dark stroke.
var axis = d3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(d.date); })
    .y(h);

// A area generator, for the dark stroke.
var area = d3.svg.area()
    .interpolate("basis")
    .x(function(d) { return x(d.date); })
    .y1(function(d) { return y(d.price); });


d3.csv("/static/stocks.csv", function(data) {
	console.log(data);
  var parse = d3.time.format("%b %Y").parse;

  //Nest stock values by symbol.
  symbols = d3.nest()
      .key(function(d) { return d.symbol; })
      .entries(stocks = data);

  // Parse dates and numbers. We assume values are sorted by date.
  // Also compute the maximum price per symbol, needed for the y-domain.
  symbols.forEach(function(s) {
    s.values.forEach(function(d) { d.date = parse(d.date); d.price = +d.price; });
    s.maxPrice = d3.max(s.values, function(d) { return d.price; });
    s.sumPrice = d3.sum(s.values, function(d) { return d.price; });
  });

  // Sort by maximum price, descending.
  symbols.sort(function(a, b) { return b.maxPrice - a.maxPrice; });

  var g = svg.selectAll("g")
      .data(symbols)
    .enter().append("g")
      .attr("class", "symbol");

  setTimeout(lines, duration);
});

function lines() {
  x = d3.time.scale().range([0, w - 60]);
  y = d3.scale.linear().range([h / 4 - 20, 0]);

  // Compute the minimum and maximum date across symbols.
  x.domain([
    d3.min(symbols, function(d) { return d.values[0].date; }),
    d3.max(symbols, function(d) { return d.values[d.values.length - 1].date; })
  ]);

  var g = svg.selectAll(".symbol")
      .attr("transform", function(d, i) { return "translate(0," + (i * h / 4 + 10) + ")"; });

  g.each(function(d) {
    var e = d3.select(this);

    e.append("path")
        .attr("class", "line");

    e.append("circle")
        .attr("r", 5)
        .style("fill", function(d) { return color(d.key); })
        .style("stroke", "#000")
        .style("stroke-width", "2px");

    e.append("text")
        .attr("x", 12)
        .attr("dy", ".31em")
        .text(d.key);
  });

  function draw(k) {
    g.each(function(d) {
      var e = d3.select(this);
      y.domain([0, d.maxPrice]);

      e.select("path")
          .attr("d", function(d) { return line(d.values.slice(0, k + 1)); });

      e.selectAll("circle, text")
          .data(function(d) { return [d.values[k], d.values[k]]; })
          .attr("transform", function(d) { return "translate(" + x(d.date) + "," + y(d.price) + ")"; });
    });
  }

  var k = 1, n = symbols[0].values.length;
  d3.timer(function() {
    draw(k);
    if ((k += 2) >= n - 1) {
      draw(n - 1);
      setTimeout(horizons, 500);
      return true;
    }
  });
}

function horizons() {
  svg.insert("defs", ".symbol")
    .append("clipPath")
      .attr("id", "clip")
    .append("rect")
      .attr("width", w)
      .attr("height", h / 4 - 20);

  var color = d3.scale.ordinal()
      .range(["#c6dbef", "#9ecae1", "#6baed6"]);

  var g = svg.selectAll(".symbol")
      .attr("clip-path", "url(#clip)");

  area
      .y0(h / 4 - 20);

  g.select("circle").transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + (w - 60) + "," + (-h / 4) + ")"; })
      .remove();

  g.select("text").transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + (w - 60) + "," + (h / 4 - 20) + ")"; })
      .attr("dy", "0em");

  g.each(function(d) {
    y.domain([0, d.maxPrice]);

    d3.select(this).selectAll(".area")
        .data(d3.range(3))
      .enter().insert("path", ".line")
        .attr("class", "area")
        .attr("transform", function(d) { return "translate(0," + (d * (h / 4 - 20)) + ")"; })
        .attr("d", area(d.values))
        .style("fill", function(d, i) { return color(i); })
        .style("fill-opacity", 1e-6);

    y.domain([0, d.maxPrice / 3]);

    d3.select(this).selectAll(".line").transition()
        .duration(duration)
        .attr("d", line(d.values))
        .style("stroke-opacity", 1e-6);

    d3.select(this).selectAll(".area").transition()
        .duration(duration)
        .style("fill-opacity", 1)
        .attr("d", area(d.values))
        .each("end", function() { d3.select(this).style("fill-opacity", null); });
  });

  setTimeout(areas, duration + delay);
}

function areas() {
  var g = svg.selectAll(".symbol");

  axis
      .y(h / 4 - 21);

  g.select(".line")
      .attr("d", function(d) { return axis(d.values); });

  g.each(function(d) {
    y.domain([0, d.maxPrice]);

    d3.select(this).select(".line").transition()
        .duration(duration)
        .style("stroke-opacity", 1)
        .each("end", function() { d3.select(this).style("stroke-opacity", null); });

    d3.select(this).selectAll(".area")
        .filter(function(d, i) { return i; })
      .transition()
        .duration(duration)
        .style("fill-opacity", 1e-6)
        .attr("d", area(d.values))
        .remove();

    d3.select(this).selectAll(".area")
        .filter(function(d, i) { return !i; })
      .transition()
        .duration(duration)
        .style("fill", color(d.key))
        .attr("d", area(d.values));
  });

  svg.select("defs").transition()
      .duration(duration)
      .remove();

  g.transition()
      .duration(duration)
      .each("end", function() { d3.select(this).attr("clip-path", null); });

  setTimeout(stackedArea, duration + delay);
}

function stackedArea() {
  var stack = d3.layout.stack()
      .values(function(d) { return d.values; })
      .x(function(d) { return d.date; })
      .y(function(d) { return d.price; })
      .out(function(d, y0, y) { d.price0 = y0; })
      .order("reverse");

  stack(symbols);

  y
      .domain([0, d3.max(symbols[0].values.map(function(d) { return d.price + d.price0; }))])
      .range([h, 0]);

  line
      .y(function(d) { return y(d.price0); });

  area
      .y0(function(d) { return y(d.price0); })
      .y1(function(d) { return y(d.price0 + d.price); });

  var t = svg.selectAll(".symbol").transition()
      .duration(duration)
      .attr("transform", "translate(0,0)")
      .each("end", function() { d3.select(this).attr("transform", null); });

  t.select("path.area")
      .attr("d", function(d) { return area(d.values); });

  t.select("path.line")
      .style("stroke-opacity", function(d, i) { return i < 3 ? 1e-6 : 1; })
      .attr("d", function(d) { return line(d.values); });

  t.select("text")
      .attr("transform", function(d) { d = d.values[d.values.length - 1]; return "translate(" + (w - 60) + "," + y(d.price / 2 + d.price0) + ")"; });

  setTimeout(streamgraph, duration + delay);
}

function streamgraph() {
  var stack = d3.layout.stack()
      .values(function(d) { return d.values; })
      .x(function(d) { return d.date; })
      .y(function(d) { return d.price; })
      .out(function(d, y0, y) { d.price0 = y0; })
      .order("reverse")
      .offset("wiggle");

  stack(symbols);

  line
      .y(function(d) { return y(d.price0); });

  var t = svg.selectAll(".symbol").transition()
      .duration(duration);

  t.select("path.area")
      .attr("d", function(d) { return area(d.values); });

  t.select("path.line")
      .style("stroke-opacity", 1e-6)
      .attr("d", function(d) { return line(d.values); });

  t.select("text")
      .attr("transform", function(d) { d = d.values[d.values.length - 1]; return "translate(" + (w - 60) + "," + y(d.price / 2 + d.price0) + ")"; });

  setTimeout(overlappingArea, duration + delay);
}

function overlappingArea() {
  var g = svg.selectAll(".symbol");

  line
      .y(function(d) { return y(d.price0 + d.price); });

  g.select(".line")
      .attr("d", function(d) { return line(d.values); });

  y
      .domain([0, d3.max(symbols.map(function(d) { return d.maxPrice; }))])
      .range([h, 0]);

  area
      .y0(h)
      .y1(function(d) { return y(d.price); });

  line
      .y(function(d) { return y(d.price); });

  var t = g.transition()
      .duration(duration);

  t.select(".line")
      .style("stroke-opacity", 1)
      .attr("d", function(d) { return line(d.values); });

  t.select(".area")
      .style("fill-opacity", .5)
      .attr("d", function(d) { return area(d.values); });

  t.select("text")
      .attr("dy", ".31em")
      .attr("transform", function(d) { d = d.values[d.values.length - 1]; return "translate(" + (w - 60) + "," + y(d.price) + ")"; });

  svg.append("line")
      .attr("class", "line")
      .attr("x1", 0)
      .attr("x2", w - 60)
      .attr("y1", h)
      .attr("y2", h)
      .style("stroke-opacity", 1e-6)
    .transition()
      .duration(duration)
      .style("stroke-opacity", 1);

  setTimeout(groupedBar, duration + delay);
}

function groupedBar() {
  x = d3.scale.ordinal()
      .domain(symbols[0].values.map(function(d) { return d.date; }))
      .rangeBands([0, w - 60], .1);

  var x1 = d3.scale.ordinal()
      .domain(symbols.map(function(d) { return d.key; }))
      .rangeBands([0, x.rangeBand()]);

  var g = svg.selectAll(".symbol");

  var t = g.transition()
      .duration(duration);

  t.select(".line")
      .style("stroke-opacity", 1e-6)
      .remove();

  t.select(".area")
      .style("fill-opacity", 1e-6)
      .remove();

  g.each(function(p, j) {
    d3.select(this).selectAll("rect")
        .data(function(d) { return d.values; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.date) + x1(p.key); })
        .attr("y", function(d) { return y(d.price); })
        .attr("width", x1.rangeBand())
        .attr("height", function(d) { return h - y(d.price); })
        .style("fill", color(p.key))
        .style("fill-opacity", 1e-6)
      .transition()
        .duration(duration)
        .style("fill-opacity", 1);
  });

  setTimeout(stackedBar, duration + delay);
}

function stackedBar() {
  x.rangeRoundBands([0, w - 60], .1);

  var stack = d3.layout.stack()
      .values(function(d) { return d.values; })
      .x(function(d) { return d.date; })
      .y(function(d) { return d.price; })
      .out(function(d, y0, y) { d.price0 = y0; })
      .order("reverse");

  var g = svg.selectAll(".symbol");

  stack(symbols);

  y
      .domain([0, d3.max(symbols[0].values.map(function(d) { return d.price + d.price0; }))])
      .range([h, 0]);

  var t = g.transition()
      .duration(duration / 2);

  t.select("text")
      .delay(symbols[0].values.length * 10)
      .attr("transform", function(d) { d = d.values[d.values.length - 1]; return "translate(" + (w - 60) + "," + y(d.price / 2 + d.price0) + ")"; });

  t.selectAll("rect")
      .delay(function(d, i) { return i * 10; })
      .attr("y", function(d) { return y(d.price0 + d.price); })
      .attr("height", function(d) { return h - y(d.price); })
      .each("end", function() {
        d3.select(this)
            .style("stroke", "#fff")
            .style("stroke-opacity", 1e-6)
          .transition()
            .duration(duration / 2)
            .attr("x", function(d) { return x(d.date); })
            .attr("width", x.rangeBand())
            .style("stroke-opacity", 1);
      });

  setTimeout(transposeBar, duration + symbols[0].values.length * 10 + delay);
}

function transposeBar() {
  x
      .domain(symbols.map(function(d) { return d.key; }))
      .rangeRoundBands([0, w], .2);

  y
      .domain([0, d3.max(symbols.map(function(d) { return d3.sum(d.values.map(function(d) { return d.price; })); }))]);

  var stack = d3.layout.stack()
      .x(function(d, i) { return i; })
      .y(function(d) { return d.price; })
      .out(function(d, y0, y) { d.price0 = y0; });

  stack(d3.zip.apply(null, symbols.map(function(d) { return d.values; }))); // transpose!

  var g = svg.selectAll(".symbol");

  var t = g.transition()
      .duration(duration / 2);

  t.selectAll("rect")
      .delay(function(d, i) { return i * 10; })
      .attr("y", function(d) { return y(d.price0 + d.price) - 1; })
      .attr("height", function(d) { return h - y(d.price) + 1; })
      .attr("x", function(d) { return x(d.symbol); })
      .attr("width", x.rangeBand())
      .style("stroke-opacity", 1e-6);

  t.select("text")
      .attr("x", 0)
      .attr("transform", function(d) { return "translate(" + (x(d.key) + x.rangeBand() / 2) + "," + h + ")"; })
      .attr("dy", "1.31em")
      .each("end", function() { d3.select(this).attr("x", null).attr("text-anchor", "middle"); });

  svg.select("line").transition()
      .duration(duration)
      .attr("x2", w);

  setTimeout(donut,  duration / 2 + symbols[0].values.length * 10 + delay);
}

function donut() {
  var g = svg.selectAll(".symbol");

  g.selectAll("rect").remove();

  var pie = d3.layout.pie()
      .value(function(d) { return d.sumPrice; });

  var arc = d3.svg.arc();

  g.append("path")
      .style("fill", function(d) { return color(d.key); })
      .data(function() { return pie(symbols); })
    .transition()
      .duration(duration)
      .tween("arc", arcTween);

  g.select("text").transition()
      .duration(duration)
      .attr("dy", ".31em");

  svg.select("line").transition()
      .duration(duration)
      .attr("y1", 2 * h)
      .attr("y2", 2 * h)
      .remove();

  function arcTween(d) {
    var path = d3.select(this),
        text = d3.select(this.parentNode.appendChild(this.previousSibling)),
        x0 = x(d.data.key),
        y0 = h - y(d.data.sumPrice);

    return function(t) {
      var r = h / 2 / Math.min(1, t + 1e-3),
          a = Math.cos(t * Math.PI / 2),
          xx = (-r + (a) * (x0 + x.rangeBand()) + (1 - a) * (w + h) / 2),
          yy = ((a) * h + (1 - a) * h / 2),
          f = {
            innerRadius: r - x.rangeBand() / (2 - a),
            outerRadius: r,
            startAngle: a * (Math.PI / 2 - y0 / r) + (1 - a) * d.startAngle,
            endAngle: a * (Math.PI / 2) + (1 - a) * d.endAngle
          };

      path.attr("transform", "translate(" + xx + "," + yy + ")");
      path.attr("d", arc(f));
      text.attr("transform", "translate(" + arc.centroid(f) + ")translate(" + xx + "," + yy + ")rotate(" + ((f.startAngle + f.endAngle) / 2 + 3 * Math.PI / 2) * 180 / Math.PI + ")");
    };
  }

  setTimeout(donutExplode, duration + delay);
}

function donutExplode() {
  var r0a = h / 2 - x.rangeBand() / 2,
      r1a = h / 2,
      r0b = 2 * h - x.rangeBand() / 2,
      r1b = 2 * h,
      arc = d3.svg.arc();

  svg.selectAll(".symbol path")
      .each(transitionExplode);

  function transitionExplode(d, i) {
    d.innerRadius = r0a;
    d.outerRadius = r1a;
    d3.select(this).transition()
        .duration(duration / 2)
        .tween("arc", tweenArc({
          innerRadius: r0b,
          outerRadius: r1b
        }));
  }

  function tweenArc(b) {
    return function(a) {
      var path = d3.select(this),
          text = d3.select(this.nextSibling),
          i = d3.interpolate(a, b);
      for (var key in b) a[key] = b[key]; // update data
      return function(t) {
        var a = i(t);
        path.attr("d", arc(a));
        text.attr("transform", "translate(" + arc.centroid(a) + ")translate(" + w / 2 + "," + h / 2 +")rotate(" + ((a.startAngle + a.endAngle) / 2 + 3 * Math.PI / 2) * 180 / Math.PI + ")");
      };
    }
  }

  setTimeout(function() {
    svg.selectAll("*").remove();
    svg.selectAll("g").data(symbols).enter().append("g").attr("class", "symbol");
    lines();
  }, duration);
}