import React from 'react';
import Title from '../Globals/Title';
export default function Contact() {
	return (
		<section className="contact py-5">
			<Title title="contact us" />
			<div className="col-10 col-sm-8 col-md-6 mx-auto">
				<form>
					{/* name */}
					<div className="form-group">
						<label for="name">Name</label>
						<input type="text" className="form-control" name="name" id="name" placeholder="Bruce Wayne" />
					</div>
					{/* e-mail */}
					<div className="form-group">
						<label for="email">E-mail</label>
						<input
							type="text"
							className="form-control"
							name="email"
							id="email"
							placeholder="bruce.wayne@waynetech.com"
						/>
					</div>
					{/* description */}
					<div className="form-group">
						<label for="description">Description</label>
						<textarea
							name="description"
							id="description"
							className="form-control"
							rows="5"
							placeholder="Description goes here"
						/>
					</div>
					{/* submit */}
					<button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">
						submit
					</button>
				</form>
			</div>
		</section>
	);
}
