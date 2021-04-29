Post = function (post) {
    this.Id = undefined;
    this.Title = undefined;
    this.Excerpt = undefined;
    this.CategoryId = undefined;
    this.TagIds = undefined;
    this.PostedOn = undefined;
    if (post) {
        angular.extend(this, post);
    }
}