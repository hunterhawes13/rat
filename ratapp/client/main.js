import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.CommentList.helpers({
	comments: function () {
		return [
			{
				timestamp: new Date,
				login: 'hunterhawes13',
				room: 'main',
				comment: 'First Comment!'

			},
			{
				timestamp: new Date,
				login: 'hunterhawes13',
				room: 'main',
				comment: 'First Comment!'

			}
		];
	}
});
