Tag = function (tag) {
    this.Id = undefined;
    this.TagName = undefined;

    if (tag) {
        angular.extend(this, tag);
    }
}