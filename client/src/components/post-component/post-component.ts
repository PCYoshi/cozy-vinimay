import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post, User } from "../../providers/apiClient/index";
import DateFormaterService from "../../providers/date-formater";

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'post-component',
  templateUrl: 'post-component.html'
})
export class PostComponent {

  @Input() post: Post
  @Input() user: User
	@Output() postDeleted = new EventEmitter()
	PrivacyEnum = Post.PrivacyEnum
	creationDate: string
	editionDate: string
	deleted = false

  constructor(public dateFormatter: DateFormaterService) {
  }

	ngOnInit() {
		this.post.content =	this.post.content.replace(/\n/g, '<br>')

		this.creationDate = this.dateFormatter.fullDate(this.post.creationTs)
		if(this.post.lastEditTs && this.post.creationTs !== this.post.lastEditTs) {
			this.editionDate = this.dateFormatter.fullDate(this.post.lastEditTs)
		}
	}

}