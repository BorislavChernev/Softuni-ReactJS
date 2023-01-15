function App() {
	return (
		<div>
			<div className="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
				<div className="row gx-0">
					<div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
						<div className="d-inline-flex align-items-center">
							<a className="text-body py-2 pe-3 border-end" href="/index.html">
								<small>FAQs</small>
							</a>
							<a className="text-body py-2 px-3 border-end" href="/index.html">
								<small>Support</small>
							</a>
							<a className="text-body py-2 px-3 border-end" href="/index.html">
								<small>Privacy</small>
							</a>
							<a className="text-body py-2 px-3 border-end" href="/index.html">
								<small>Policy</small>
							</a>
							<a className="text-body py-2 ps-3" href="/index.html">
								<small>Career</small>
							</a>
						</div>
					</div>
					<div className="col-md-6 text-center text-lg-end">
						<div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
							<div className="me-3 pe-3 border-end py-2">
								<p className="m-0">
									<i className="fa fa-envelope-open me-2"></i>info@example.com
								</p>
							</div>
							<div className="py-2">
								<p className="m-0">
									<i className="fa fa-phone-alt me-2"></i>+012 345 6789
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
				<a href="index.html" className="navbar-brand p-0">
					<h1 className="m-0 text-uppercase text-primary">
						<i className="far fa-smile text-primary me-2"></i>consult
					</h1>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<div className="navbar-nav ms-auto py-0 me-n3">
						<a href="index.html" className="nav-item nav-link active">
							Home
						</a>
						<a href="about.html" className="nav-item nav-link">
							About
						</a>
						<a href="service.html" className="nav-item nav-link">
							Service
						</a>
						<div className="nav-item dropdown">
							<a
								href="#"
								className="nav-link dropdown-toggle"
								data-bs-toggle="dropdown"
							>
								Pages
							</a>
							<div className="dropdown-menu m-0">
								<a href="blog.html" className="dropdown-item">
									Blog Grid
								</a>
								<a href="detail.html" className="dropdown-item">
									Blog Detail
								</a>
								<a href="feature.html" className="dropdown-item">
									Features
								</a>
								<a href="quote.html" className="dropdown-item">
									Quote Form
								</a>
								<a href="team.html" className="dropdown-item">
									The Team
								</a>
								<a href="testimonial.html" className="dropdown-item">
									Testimonial
								</a>
							</div>
						</div>
						<a href="contact.html" className="nav-item nav-link">
							Contact
						</a>
					</div>
				</div>
			</nav>

			<div className="container-fluid p-0">
				<div
					id="header-carousel"
					className="carousel slide carousel-fade"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="w-100" src="img/carousel-1.jpg" alt="Image" />
							<div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
								<div className="p-3" style="max-width: 900px;">
									<h5 className="text-white text-uppercase">
										Business Consultancy
									</h5>
									<h1 className="display-1 text-white mb-md-4">
										We Provide Solution On Your Business
									</h1>
									<a
										href="/index.html"
										className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill"
									>
										Get Quote
									</a>
									<a
										href="/index.html"
										className="btn btn-secondary py-md-3 px-md-5 rounded-pill"
									>
										Contact Us
									</a>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img className="w-100" src="img/carousel-2.jpg" alt="Image" />
							<div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
								<div className="p-3" style="max-width: 900px;">
									<h5 className="text-white text-uppercase">
										Business Consultancy
									</h5>
									<h1 className="display-1 text-white mb-md-4">
										Take Our Help To Reach The Top Level
									</h1>
									<a
										href="/index.html"
										className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill"
									>
										Get Quote
									</a>
									<a
										href="/index.html"
										className="btn btn-secondary py-md-3 px-md-5 rounded-pill"
									>
										Contact Us
									</a>
								</div>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#header-carousel"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#header-carousel"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>

			<div className="container-fluid bg-secondary p-0">
				<div className="row g-0">
					<div className="col-lg-6 py-6 px-5">
						<h1 className="display-5 mb-4">
							Welcome To <span className="text-primary">CONSULT</span>
						</h1>
						<h4 className="text-primary mb-4">
							Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem
							sit clita duo justo magna dolore
						</h4>
						<p className="mb-4">
							Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam
							stet magna at et sanctus, vero sea sit amet dolores, sit dolor duo
							invidunt dolor, kasd rebum consetetur diam invidunt erat stet.
							Accusam nonumy lorem kasd eirmod. Justo clita sadipscing ea
							invidunt rebum sadipscing consetetur. Amet diam amet amet sanctus
							sanctus invidunt erat ipsum eirmod.
						</p>
						<a href="/index.html" className="btn btn-primary py-md-3 px-md-5 rounded-pill">
							Get A Quote
						</a>
					</div>
					<div className="col-lg-6">
						<div className="h-100 d-flex flex-column justify-content-center bg-primary p-5">
							<div className="d-flex text-white mb-5">
								<div
									className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
									style="width: 60px; height: 60px;"
								>
									<i className="fa fa-user-tie fs-4"></i>
								</div>
								<div className="ps-4">
									<h3>Business Planning</h3>
									<p className="mb-0">
										Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
										erat ipsum lorem et sit sed stet lorem sit clita duo
									</p>
								</div>
							</div>
							<div className="d-flex text-white mb-5">
								<div
									className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
									style="width: 60px; height: 60px;"
								>
									<i className="fa fa-chart-line fs-4"></i>
								</div>
								<div className="ps-4">
									<h3>Financial Analaysis</h3>
									<p className="mb-0">
										Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
										erat ipsum lorem et sit sed stet lorem sit clita duo
									</p>
								</div>
							</div>
							<div className="d-flex text-white">
								<div
									className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
									style="width: 60px; height: 60px;"
								>
									<i className="fa fa-balance-scale fs-4"></i>
								</div>
								<div className="ps-4">
									<h3>legal Advisory</h3>
									<p className="mb-0">
										Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
										erat ipsum lorem et sit sed stet lorem sit clita duo
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid pt-6 px-5">
				<div className="text-center mx-auto mb-5" style="max-width: 600px;">
					<h1 className="display-5 mb-0">What We Offer</h1>
					<hr className="w-25 mx-auto bg-primary" />
				</div>
				<div className="row g-5">
					<div className="col-lg-4 col-md-6">
						<div className="service-item bg-secondary text-center px-5">
							<div
								className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4"
								style="width: 90px; height: 90px;"
							>
								<i className="fa fa-user-tie fa-2x"></i>
							</div>
							<h3 className="mb-3">Business Research</h3>
							<p className="mb-0">
								Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
								ipsum lorem et sit sed stet lorem
							</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-item bg-secondary text-center px-5">
							<div
								className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4"
								style="width: 90px; height: 90px;"
							>
								<i className="fa fa-chart-pie fa-2x"></i>
							</div>
							<h3 className="mb-3">Stretagic Planning</h3>
							<p className="mb-0">
								Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
								ipsum lorem et sit sed stet lorem
							</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-item bg-secondary text-center px-5">
							<div
								className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4"
								style="width: 90px; height: 90px;"
							>
								<i className="fa fa-chart-line fa-2x"></i>
							</div>
							<h3 className="mb-3">Market Analysis</h3>
							<p className="mb-0">
								Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
								ipsum lorem et sit sed stet lorem
							</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-item bg-secondary text-center px-5">
							<div
								className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4"
								style="width: 90px; height: 90px;"
							>
								<i className="fa fa-chart-area fa-2x"></i>
							</div>
							<h3 className="mb-3">Financial Analaysis</h3>
							<p className="mb-0">
								Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
								ipsum lorem et sit sed stet lorem
							</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-item bg-secondary text-center px-5">
							<div
								className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4"
								style="width: 90px; height: 90px;"
							>
								<i className="fa fa-balance-scale fa-2x"></i>
							</div>
							<h3 className="mb-3">legal Advisory</h3>
							<p className="mb-0">
								Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
								ipsum lorem et sit sed stet lorem
							</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-item bg-secondary text-center px-5">
							<div
								className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4"
								style="width: 90px; height: 90px;"
							>
								<i className="fa fa-house-damage fa-2x"></i>
							</div>
							<h3 className="mb-3">Tax & Insurance</h3>
							<p className="mb-0">
								Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
								ipsum lorem et sit sed stet lorem
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid py-6 px-5">
				<div className="text-center mx-auto mb-5" style="max-width: 600px;">
					<h1 className="display-5 mb-0">Why Choose Us!!!</h1>
					<hr className="w-25 mx-auto bg-primary" />
				</div>
				<div className="row g-5">
					<div className="col-lg-4">
						<div className="row g-5">
							<div className="col-12">
								<div
									className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
									style="width: 60px; height: 60px;"
								>
									<i className="fa fa-cubes fs-4 text-white"></i>
								</div>
								<h3>Best In Industry</h3>
								<p className="mb-0">
									Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
									diam et diam dolor ea
								</p>
							</div>
							<div className="col-12">
								<div
									className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
									style="width: 60px; height: 60px;"
								>
									<i className="fa fa-percent fs-4 text-white"></i>
								</div>
								<h3>99% Success Rate</h3>
								<p className="mb-0">
									Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
									diam et diam dolor ea
								</p>
							</div>
							<div className="col-12">
								<div
									className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
									style="width: 60px; height: 60px;"
								>
									<i className="fa fa-award fs-4 text-white"></i>
								</div>
								<h3>Award Winning</h3>
								<p className="mb-0">
									Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
									diam et diam dolor ea
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="d-block bg-primary h-100 text-center">
							<img className="img-fluid" src="img/feature.jpg" alt="" />
							<div className="p-4">
								<p className="text-white mb-4">
									Clita nonumy sanctus nonumy et clita tempor, et sea amet ut et
									sadipscing rebum amet takimata amet, sed accusam eos eos
									dolores dolore et. Et ea ea dolor rebum invidunt clita eos.
									Sea accusam stet stet ipsum, sit ipsum et ipsum kasd
								</p>
								<a
									href="/index.html"
									className="btn btn-light py-md-3 px-md-5 rounded-pill mb-2"
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row g-5">
							<div className="col-12">
								<div
									className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
									style="width: 60px; height: 60px;"
								>
									<i className="far fa-smile-beam fs-4 text-white"></i>
								</div>
								<h3>100% Happy Client</h3>
								<p className="mb-0">
									Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
									diam et diam dolor ea
								</p>
							</div>
							<div className="col-12">
								<div
									className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
									style="width: 60px; height: 60px;"
								>
									<i className="fa fa-user-tie fs-4 text-white"></i>
								</div>
								<h3>Professional Advisors</h3>
								<p className="mb-0">
									Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
									diam et diam dolor ea
								</p>
							</div>
							<div className="col-12">
								<div
									className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
									style="width: 60px; height: 60px;"
								>
									<i className="fa fa-headset fs-4 text-white"></i>
								</div>
								<h3>24/7 Customer Support</h3>
								<p className="mb-0">
									Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
									diam et diam dolor ea
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid bg-secondary px-0">
				<div className="row g-0">
					<div className="col-lg-6 py-6 px-5">
						<h1 className="display-5 mb-4">Request A Free Quote</h1>
						<p className="mb-4">
							Kasd vero erat ea amet justo no stet, et elitr no dolore no elitr
							sea kasd et dolor diam tempor. Nonumy sed dolore no eirmod sit
							nonumy vero lorem amet stet diam at. Ea at lorem sed et, lorem et
							rebum ut eirmod gubergren, dolor ea duo diam justo dolor diam
							ipsum dolore stet stet elitr ut. Ipsum amet labore lorem lorem
							diam magna sea, eos sed dolore elitr.
						</p>
						<form>
							<div className="row gx-3">
								<div className="col-6">
									<div className="form-floating">
										<input
											type="text"
											className="form-control"
											id="form-floating-1"
											placeholder="John Doe"
										/>
										<label htmlFor="form-floating-1">Full Name</label>
									</div>
								</div>
								<div className="col-6">
									<div className="form-floating mb-3">
										<input
											type="email"
											className="form-control"
											id="form-floating-2"
											placeholder="name@example.com"
										/>
										<label htmlFor="form-floating-2">Email address</label>
									</div>
								</div>
								<div className="col-6">
									<div className="form-floating">
										<select
											className="form-select"
											id="floatingSelect"
											aria-label="Financial Consultancy"
										>
											<option defaultValue={0}>Financial Consultancy</option>
											<option value="1">Strategy Consultancy</option>
											<option value="2">Tax Consultancy</option>
										</select>
										<label htmlFor="floatingSelect">Select A Service</label>
									</div>
								</div>
								<div className="col-6">
									<button className="btn btn-primary w-100 h-100" type="submit">
										Request A Quote
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className="col-lg-6" style="min-height: 400px;">
						<div className="position-relative h-100">
							<img
								className="position-absolute w-100 h-100"
								src="img/quote.jpg"
								style="object-fit: cover;"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid py-6 px-5">
				<div className="text-center mx-auto mb-5" style="max-width: 600px;">
					<h1 className="display-5 mb-0">Our Team Members</h1>
					<hr className="w-25 mx-auto bg-primary" />
				</div>
				<div className="row g-5">
					<div className="col-lg-4">
						<div className="team-item position-relative overflow-hidden">
							<img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
							<div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
								<h3 className="text-white">Full Name</h3>
								<p className="text-white text-uppercase mb-0">Designation</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="team-item position-relative overflow-hidden">
							<img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
							<div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
								<h3 className="text-white">Full Name</h3>
								<p className="text-white text-uppercase mb-0">Designation</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="team-item position-relative overflow-hidden">
							<img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
							<div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
								<h3 className="text-white">Full Name</h3>
								<p className="text-white text-uppercase mb-0">Designation</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid bg-secondary p-0">
				<div className="row g-0">
					<div className="col-lg-6" style="min-height: 500px;">
						<div className="position-relative h-100">
							<img
								className="position-absolute w-100 h-100"
								src="img/testimonial.jpg"
								style="object-fit: cover;"
							/>
						</div>
					</div>
					<div className="col-lg-6 py-6 px-5">
						<h1 className="display-5 mb-4">What Say Our Client!!!</h1>
						<div className="owl-carousel testimonial-carousel">
							<div className="testimonial-item">
								<p className="fs-4 fw-normal mb-4">
									<i className="fa fa-quote-left text-primary me-3"></i>Dolores
									sed duo clita tempor justo dolor et stet lorem kasd labore
									dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
									labore et tempor diam tempor erat dolor rebum sit ipsum.
								</p>
								<div className="d-flex align-items-center">
									<img
										className="img-fluid rounded-circle"
										src="img/testimonial-1.jpg"
										alt=""
									/>
									<div className="ps-4">
										<h3>Client Name</h3>
										<span className="text-uppercase">Profession</span>
									</div>
								</div>
							</div>
							<div className="testimonial-item">
								<p className="fs-4 fw-normal mb-4">
									<i className="fa fa-quote-left text-primary me-3"></i>Dolores
									sed duo clita tempor justo dolor et stet lorem kasd labore
									dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
									labore et tempor diam tempor erat dolor rebum sit ipsum.
								</p>
								<div className="d-flex align-items-center">
									<img
										className="img-fluid rounded-circle"
										src="img/testimonial-2.jpg"
										alt=""
									/>
									<div className="ps-4">
										<h3>Client Name</h3>
										<span className="text-uppercase">Profession</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid py-6 px-5">
				<div className="text-center mx-auto mb-5" style="max-width: 600px;">
					<h1 className="display-5 mb-0">Latest Blog Post</h1>
					<hr className="w-25 mx-auto bg-primary" />
				</div>
				<div className="row g-5">
					<div className="col-lg-4">
						<div className="blog-item">
							<div className="position-relative overflow-hidden">
								<img className="img-fluid" src="img/blog-1.jpg" alt="" />
							</div>
							<div className="bg-secondary d-flex">
								<div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
									<span>01</span>
									<h5 className="text-uppercase m-0">Jan</h5>
									<span>2045</span>
								</div>
								<div className="d-flex flex-column justify-content-center py-3 px-4">
									<div className="d-flex mb-2">
										<small className="text-uppercase me-3">
											<i className="bi bi-person me-2"></i>Admin
										</small>
										<small className="text-uppercase me-3">
											<i className="bi bi-bookmarks me-2"></i>Web Design
										</small>
									</div>
									<a className="h4" href="/index.html">
										Magna sea dolor ipsum amet lorem eos
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="blog-item">
							<div className="position-relative overflow-hidden">
								<img className="img-fluid" src="img/blog-2.jpg" alt="" />
							</div>
							<div className="bg-secondary d-flex">
								<div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
									<span>01</span>
									<h5 className="text-uppercase m-0">Jan</h5>
									<span>2045</span>
								</div>
								<div className="d-flex flex-column justify-content-center py-3 px-4">
									<div className="d-flex mb-2">
										<small className="text-uppercase me-3">
											<i className="bi bi-person me-2"></i>Admin
										</small>
										<small className="text-uppercase me-3">
											<i className="bi bi-bookmarks me-2"></i>Web Design
										</small>
									</div>
									<a className="h4" href="/index.html">
										Magna sea dolor ipsum amet lorem eos
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="blog-item">
							<div className="position-relative overflow-hidden">
								<img className="img-fluid" src="img/blog-3.jpg" alt="" />
							</div>
							<div className="bg-secondary d-flex">
								<div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
									<span>01</span>
									<h5 className="text-uppercase m-0">Jan</h5>
									<span>2045</span>
								</div>
								<div className="d-flex flex-column justify-content-center py-3 px-4">
									<div className="d-flex mb-2">
										<small className="text-uppercase me-3">
											<i className="bi bi-person me-2"></i>Admin
										</small>
										<small className="text-uppercase me-3">
											<i className="bi bi-bookmarks me-2"></i>Web Design
										</small>
									</div>
									<a className="h4" href="/index.html">
										Magna sea dolor ipsum amet lorem eos
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid bg-primary text-secondary p-5">
				<div className="row g-5">
					<div className="col-12 text-center">
						<h1 className="display-5 mb-4">Stay Update!!!</h1>
						<form className="mx-auto" style="max-width: 600px;">
							<div className="input-group">
								<input
									type="text"
									className="form-control border-white p-3"
									placeholder="Your Email"
								/>
								<button className="btn btn-dark px-4">Sign Up</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="container-fluid bg-dark text-secondary p-5">
				<div className="row g-5">
					<div className="col-lg-3 col-md-6">
						<h3 className="text-white mb-4">Quick Links</h3>
						<div className="d-flex flex-column justify-content-start">
							<a className="text-secondary mb-2" href="#">
								<i className="bi bi-arrow-right text-primary me-2"></i>Home
							</a>
							<a className="text-secondary mb-2" href="#">
								<i className="bi bi-arrow-right text-primary me-2"></i>About Us
							</a>
							<a className="text-secondary mb-2" href="#">
								<i className="bi bi-arrow-right text-primary me-2"></i>Our
								Services
							</a>
							<a className="text-secondary mb-2" href="#">
								<i className="bi bi-arrow-right text-primary me-2"></i>Latest
								Blog Post
							</a>
							<a className="text-secondary" href="#">
								<i className="bi bi-arrow-right text-primary me-2"></i>Contact
								Us
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<h3 className="text-white mb-4">Popular Links</h3>
						<div className="d-flex flex-column justify-content-start">
							<a className="text-secondary mb-2" href="#">
								<i className="bi bi-arrow-right text-primary me-2"></i>Home
							</a>
							<a className="text-secondary mb-2" href="#">
								<i className="bi bi-arrow-right text-primary me-2"></i>About Us
							</a>
							<a className="text-secondary mb-2" href="#">
								<i className="bi bi-arrow-right text-primary me-2"></i>Our
								Services
							</a>
							<a className="text-secondary mb-2" href="#">
								<i className="bi bi-arrow-right text-primary me-2"></i>Latest
								Blog Post
							</a>
							<a className="text-secondary" href="#">
								<i className="bi bi-arrow-right text-primary me-2"></i>Contact
								Us
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<h3 className="text-white mb-4">Get In Touch</h3>
						<p className="mb-2">
							<i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New
							York, USA
						</p>
						<p className="mb-2">
							<i className="bi bi-envelope-open text-primary me-2"></i>
							info@example.com
						</p>
						<p className="mb-0">
							<i className="bi bi-telephone text-primary me-2"></i>+012 345
							67890
						</p>
					</div>
					<div className="col-lg-3 col-md-6">
						<h3 className="text-white mb-4">Follow Us</h3>
						<div className="d-flex">
							<a
								className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
								href="#"
							>
								<i className="fab fa-twitter fw-normal"></i>
							</a>
							<a
								className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
								href="#"
							>
								<i className="fab fa-facebook-f fw-normal"></i>
							</a>
							<a
								className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
								href="#"
							>
								<i className="fab fa-linkedin-in fw-normal"></i>
							</a>
							<a
								className="btn btn-lg btn-primary btn-lg-square rounded-circle"
								href="#"
							>
								<i className="fab fa-instagram fw-normal"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				className="container-fluid bg-dark text-secondary text-center border-top py-4 px-5"
				style="border-color: rgba(256, 256, 256, .1) !important;"
			>
				<p className="m-0">
					&copy;{' '}
					<a className="text-secondary border-bottom" href="#">
						Your Site Name
					</a>
					. All Rights Reserved. Designed by{' '}
					<a
						className="text-secondary border-bottom"
						href="https://htmlcodex.com"
					>
						HTML Codex
					</a>
				</p>
			</div>

			<a
				href="#"
				className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
			>
				<i className="bi bi-arrow-up"></i>
			</a>

			<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
			<script src="lib/easing/easing.min.js"></script>
			<script src="lib/waypoints/waypoints.min.js"></script>
			<script src="lib/owlcarousel/owl.carousel.min.js"></script>

			<script src="js/main.js"></script>
		</div>
	);
}

export default App;
