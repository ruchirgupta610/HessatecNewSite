HessatecApp.controller('BlogController', function ($scope) {
    $scope.init = function () {
        $scope.Categories = Categories;
        $scope.Tags = Tags;
        $scope.AllPosts = Posts;

        $scope.Categories.forEach(function (c) { c.TotalPosts = $scope.AllPosts.filter(p => p.CategoryId == c.Id).length });

        $scope.AllPosts.forEach(function (p) {
            p.CategoryName = $scope.Categories.find(c => p.CategoryId == c.Id).CategoryName;
            p.PostedOnDate = '' + p.PostedOn.getDate() + ' ' + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][p.PostedOn.getMonth()] + ' ' + p.PostedOn.getFullYear();
        });


        $scope.Filter();
    };

    $scope.Filter = function () {
        if ($scope.tagToFilter) {
            $scope.Posts = $scope.AllPosts.filter(p => p.TagIds.indexOf($scope.tagToFilter) >= 0);
            $scope.tagName = $scope.Tags.find(t => t.Id == $scope.tagToFilter).TagName;
        }
        else if ($scope.categoryToFilter) {
            $scope.Posts = $scope.AllPosts.filter(p => p.CategoryId == $scope.categoryToFilter);
            $scope.categoryName = $scope.Categories.find(c => c.Id == $scope.categoryToFilter).CategoryName;
        }
        else {
            $scope.Posts = $scope.AllPosts;
            $scope.tagToFilter = 0;
            $scope.categoryToFilter = 0;
        }

        $scope.TotalPages = Math.ceil($scope.Posts.length / 5);
        $scope.PageNumber = 1;
        $scope.Paginate();
    };

    $scope.ChangePageNumber = function (n) {
        $scope.PageNumber = n;
        $scope.Paginate();
    };

    $scope.Paginate = function () {
        $scope.PostsToShow = $scope.Posts.slice(($scope.PageNumber - 1) * 5, $scope.PageNumber * 5);
    };

    $scope.FilterByTag = function (t) {
        $scope.tagToFilter = t;
        $scope.categoryToFilter = 0;
        $scope.Filter();
    };

    $scope.FilterByCategory = function (c) {
        $scope.categoryToFilter = c;
        $scope.tagToFilter = 0;
        $scope.Filter();
    };
});