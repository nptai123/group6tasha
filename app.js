'use strict'

angular.module("eprojectApp",[
    'ngRoute',
    'eprojectApp.catalog',
    'eprojectApp.contact',
    'eprojectApp.tips',
    'eprojectApp.feedback',
    'eprojectApp.complain',
    'eprojectApp.cooking-pots',
    'eprojectApp.cooking-pans',
    'eprojectApp.frying-pans',
    'eprojectApp.cookware-sets',
    'eprojectApp.handis',
    'eprojectApp.kadais',
    'eprojectApp.grill-pans',
    'eprojectApp.tawas',
    'eprojectApp.egg-poachers',
    'eprojectApp.steamers',
    'eprojectApp.freezers',
    'eprojectApp.refrigerators',
    'eprojectApp.flask',
    'eprojectApp.spice-jars',
    'eprojectApp.storage-bags',
    'eprojectApp.lunchboxes',
    'eprojectApp.vacuum-bottles',
    'eprojectApp.blenders',
    'eprojectApp.bread-makers',
    'eprojectApp.coffee-makers',
    'eprojectApp.ice-cream',
    'eprojectApp.electric-kettles',
    'eprojectApp.food-choppers',
    'eprojectApp.toasters',
    'eprojectApp.products',
    'eprojectApp.knives',
    'eprojectApp.accessories',
    'eprojectApp.accessorie',
    'eprojectApp.blender',
    'eprojectApp.bread-maker',
    'eprojectApp.coffee-maker',
    'eprojectApp.cooking-pan',
    'eprojectApp.cooking-pot',
    'eprojectApp.cookware-set',
    'eprojectApp.egg-poacher',
    'eprojectApp.electric-kettle',
    'eprojectApp.flaskdetail',
    'eprojectApp.food-chopper',
    'eprojectApp.freezer',
    'eprojectApp.frying-pan',
    'eprojectApp.grill-pan',
    'eprojectApp.handi',
    'eprojectApp.ice-creamdt',
    'eprojectApp.kadai',
    'eprojectApp.knive',
    'eprojectApp.lunch-boxe',
    'eprojectApp.refrigerator',
    'eprojectApp.spice-jar',
    'eprojectApp.steamer',
    'eprojectApp.storage-bag',
    'eprojectApp.tawa',
    'eprojectApp.toaster',
    'eprojectApp.vacuum-bottle'
])
.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when("/", {templateUrl: "catalog/catalog.html", controller:"catalogCtrl"})
    .when("/contact", {templateUrl: "contact/contact.html", controller:"contactctrl"})
    .when("/tips", {templateUrl: "tips/tips.html", controller:"tipsCtrl"})
    .when("/feedback", {templateUrl: "feedback/feedback.html", controller:"feedbackCtrl"})
    .when("/complain", {templateUrl: "complain/complain.html", controller:"complainCtrl"})
    .when("/cooking-pots", {templateUrl: "cooking-pots/cooking-pots.html", controller:"cooking-potsCtrl"})
    .when("/cooking-pans", {templateUrl: "cooking-pans/cooking-pans.html", controller:"cooking-pansCtrl"})
    .when("/frying-pans", {templateUrl: "frying-pans/frying-pans.html", controller:"frying-pansCtrl"})
    .when("/cookware-sets", {templateUrl: "cookware-sets/cookware-sets.html", controller:"cookware-setsCtrl"})
    .when("/handis", {templateUrl: "handis/handis.html", controller:"handisCtrl"})
    .when("/kadais", {templateUrl: "kadais/kadais.html", controller:"kadaisCtrl"})
    .when("/grill-pans", {templateUrl: "grill-pans/grill-pans.html", controller:"grill-pansCtrl"})
    .when("/tawas", {templateUrl: "tawas/tawas.html", controller:"tawasCtrl"})
    .when("/egg-poachers", {templateUrl: "egg-poachers/egg-poachers.html", controller:"egg-poachersCtrl"})
    .when("/steamers", {templateUrl: "steamers/steamers.html", controller:"steamersCtrl"})
    .when("/freezers", {templateUrl: "freezers/freezers.html", controller:"freezersCtrl"})
    .when("/refrigerators", {templateUrl: "refrigerators/refrigerators.html", controller:"refrigeratorsCtrl"})
    .when("/flask", {templateUrl: "flask/flask.html", controller:"flaskCtrl"})
    .when("/spice-jars", {templateUrl: "spice-jars/spice-jars.html", controller:"spice-jarsCtrl"})
    .when("/storage-bags", {templateUrl: "storage-bags/storage-bags.html", controller:"storage-bagsCtrl"})
    .when("/lunch-boxes", {templateUrl: "lunch-boxes/lunch-boxes.html", controller:"lunch-boxesCtrl"})
    .when("/vacuum-bottles", {templateUrl: "vacuum-bottles/vacuum-bottles.html", controller:"vacuum-bottlesCtrl"})
    .when("/blenders", {templateUrl: "blenders/blenders.html", controller:"blendersCtrl"})
    .when("/bread-makers", {templateUrl: "bread-makers/bread-makers.html", controller:"bread-makersCtrl"})
    .when("/coffee-makers", {templateUrl: "coffee-makers/coffee-makers.html", controller:"coffee-makersCtrl"})
    .when("/ice-cream", {templateUrl: "ice-cream/ice-cream.html", controller:"ice-creamCtrl"})
    .when("/electric-kettles", {templateUrl: "electric-kettles/electric-kettles.html", controller:"electric-kettlesCtrl"})
    .when("/food-choppers", {templateUrl: "food-choppers/food-choppers.html", controller:"food-choppersCtrl"})
    .when("/toasters", {templateUrl: "toasters/toasters.html", controller:"toastersCtrl"})
    .when("/products/:id", {templateUrl: "products/products.html", controller:"productsCtrl"})
    .when("/knives", {templateUrl: "knives/knives.html", controller:"knivesCtrl"})
    .when("/accessories", {templateUrl: "accessories/accessories.html", controller:"accessoriesCtrl"})
    .when("/accessorie/:id", {templateUrl: "accessorie/accessorie.html", controller:"accessorieCtrl"})
    .when("/blender/:id", {templateUrl: "blender/blender.html", controller:"blenderCtrl"})
    .when("/bread-maker/:id", {templateUrl: "bread-maker/bread-maker.html", controller:"bread-makerCtrl"})
    .when("/coffee-maker/:id", {templateUrl: "coffee-maker/coffee-maker.html", controller:"coffee-makerCtrl"})
    .when("/cooking-pan/:id", {templateUrl: "cooking-pan/cooking-pan.html", controller:"cooking-panCtrl"})
    .when("/cooking-pot/:id", {templateUrl: "cooking-pot/cooking-pot.html", controller:"cooking-potCtrl"})
    .when("/cookware-set/:id", {templateUrl: "cookware-set/cookware-set.html", controller:"cookware-setCtrl"})
    .when("/egg-poacher/:id", {templateUrl: "egg-poacher/egg-poacher.html", controller:"egg-poacherCtrl"})
    .when("/electric-kettle/:id", {templateUrl: "electric-kettle/electric-kettle.html", controller:"electric-kettleCtrl"})
    .when("/flaskdetail/:id", {templateUrl: "flaskdetail/flaskdetail.html", controller:"flaskdetailCtrl"})
    .when("/food-chopper/:id", {templateUrl: "food-chopper/food-chopper.html", controller:"food-chopperCtrl"})
    .when("/freezer/:id", {templateUrl: "freezer/freezer.html", controller:"freezerCtrl"})
    .when("/frying-pan/:id", {templateUrl: "frying-pan/frying-pan.html", controller:"frying-panCtrl"})
    .when("/grill-pan/:id", {templateUrl: "grill-pan/grill-pan.html", controller:"grill-panCtrl"})
    .when("/handi/:id", {templateUrl: "handi/handi.html", controller:"handiCtrl"})
    .when("/ice-creamdt/:id", {templateUrl: "ice-creamdt/ice-creamdt.html", controller:"ice-creamdtCtrl"})
    .when("/kadai/:id", {templateUrl: "kadai/kadai.html", controller:"kadaiCtrl"})
    .when("/knive/:id", {templateUrl: "knive/knive.html", controller:"kniveCtrl"})
    .when("/lunch-boxe/:id", {templateUrl: "lunch-boxe/lunch-boxe.html", controller:"lunch-boxeCtrl"})
    .when("/refrigerator/:id", {templateUrl: "refrigerator/refrigerator.html", controller:"refrigeratorCtrl"})
    .when("/spice-jar/:id", {templateUrl: "spice-jar/spice-jar.html", controller:"spice-jarCtrl"})
    .when("/steamer/:id", {templateUrl: "steamer/steamer.html", controller:"steamerCtrl"})
    .when("/storage-bag/:id", {templateUrl: "storage-bag/storage-bag.html", controller:"storage-bagCtrl"})
    .when("/tawa/:id", {templateUrl: "tawa/tawa.html", controller:"tawaCtrl"})
    .when("/toaster/:id", {templateUrl: "toaster/toaster.html", controller:"toasterCtrl"})
    .when("/vacuum-bottle/:id", {templateUrl: "vacuum-bottle/vacuum-bottle.html", controller:"vacuum-bottleCtrl"})
    .otherwise({redirectTo:"/"});
  }
  ]);
