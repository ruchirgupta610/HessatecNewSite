Category = function (category) {
    this.Id = undefined;
    this.CategoryName = undefined;

    if (category) {
        angular.extend(this, category);
    }
}