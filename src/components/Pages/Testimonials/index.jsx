var Testimonials = React.createClass({
  render: function() {
  	var settings = {
    	dots: true
    }
    return (
    	<div className='container'>
      	<Slider {...settings}>
        	<div><p className="f5 f4-m f3-l lh-copy measure mt0 center">
                Khalil is an outstanding designer with many skills who use with perfect control.
                All the day, he have lot of proposals for creating UI and UX interface with clean and fresh design.
                It's a real pleasure to work with him, always with the smile ;)
                </p>
                <cite className="f6 ttu tracked fs-normal black-70">Marie Dehayes - Head of UX Design <a className='link black-70 b grow pointer no-underline' href="http://www.viadeo.com">Viadeo </a></cite></div>
          <div><p className="f5 f4-m f3-l lh-copy measure mt0 center">
                Khalil is an outstanding designer with many skills who use with perfect control.
                All the day, he have lot of proposals for creating UI and UX interface with clean and fresh design.
                It's a real pleasure to work with him, always with the smile ;)
                </p>
                <cite className="f6 ttu tracked fs-normal black-70">Marie Dehayes - Head of UX Design <a className='link black-70 b grow pointer no-underline' href="http://www.viadeo.com">Viadeo </a></cite></div>
          <div><p className="f5 f4-m f3-l lh-copy measure mt0 center">
                Khalil is an outstanding designer with many skills who use with perfect control.
                All the day, he have lot of proposals for creating UI and UX interface with clean and fresh design.
                It's a real pleasure to work with him, always with the smile ;)
                </p>
                <cite className="f6 ttu tracked fs-normal black-70">Marie Dehayes - Head of UX Design <a className='link black-70 b grow pointer no-underline' href="http://www.viadeo.com">Viadeo </a></cite></div>
        </Slider>
      </div>
    );
  }
});

ReactDOM.render(
  <Testimonials />,
  document.getElementById('container')
);
