import { Fragment, useState, useEffect } from 'react';

import * as UserService from '../../services/UserService';

import { UserDetails } from './user-details/UserDetails';
import { UserItem } from './user-item/UserItem';
import { UserEdit } from './user-edit/UserEdit';
import { UserActions } from './UserListConstants';
import { UserDelete } from './user-delete/UserDelete';
import { UserCreate } from './user-create/UserCreate';

export const UserSection = () => {
	const [users, setUsers] = useState([]);
	const [userAction, setUserAction] = useState({ user: null, action: null });

	useEffect(() => {
		UserService.getAll().then((users) => setUsers(users));
	}, []);

	const userActionClickHandler = (userId, actionType) => {
		UserService.getOne(userId).then((user) => {
			setUserAction({
				user: user,
				action: actionType, 
			});
		});
	};

	const CloseHandler = () => {
		setUserAction({ user: null, action: null });
	};

	const userCreateHandler = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const { firstName, lastName, email, imageUrl, phoneNumber, ...address } =
			Object.fromEntries(formData);
		const userData = {
			firstName,
			lastName,
			email,
			imageUrl,
			phoneNumber,
			address,
		};

		UserService.create(userData).then((user) => {
			console.log(user);
			setUsers((state) => [...state, user]);
			CloseHandler();
		});
	};

	return (
		<Fragment>
			<div className="table-wrapper">
				{userAction.action === UserActions.Details && (
					<UserDetails user={userAction.user} onClose={CloseHandler} />
				)}

				{userAction.action === UserActions.Edit && (
					<UserEdit user={userAction.user} onClose={CloseHandler} />
				)}

				{userAction.action === UserActions.Delete && (
					<UserDelete user={userAction.user} onClose={CloseHandler} />
				)}

				{userAction.action === UserActions.Add && (
					<UserCreate onClose={CloseHandler} onUserCreate={userCreateHandler} />
				)}

				<table className="table">
					<thead>
						<tr>
							<th>Image</th>
							<th>
								First name
								<svg
									className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="arrow-down"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path
										fill="currentColor"
										d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
									></path>
								</svg>
							</th>
							<th>
								Last name
								<svg
									className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="arrow-down"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path
										fill="currentColor"
										d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
									></path>
								</svg>
							</th>
							<th>
								Email
								<svg
									className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="arrow-down"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path
										fill="currentColor"
										d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
									></path>
								</svg>
							</th>
							<th>
								Phone
								<svg
									className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="arrow-down"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path
										fill="currentColor"
										d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
									></path>
								</svg>
							</th>
							<th>
								Created
								<svg
									className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="arrow-down"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path
										fill="currentColor"
										d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
									></path>
								</svg>
							</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<UserItem user={user} onActionClick={userActionClickHandler} />
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<button
				className="btn-add btn"
				onClick={() => userActionClickHandler(null, UserActions.Add)}
			>
				Add new user
			</button>
		</Fragment>
	);
};
