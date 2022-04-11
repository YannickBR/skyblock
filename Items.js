Items = (() => {
    let list = {
        ENCHANTED_CARROT: "ENCHANTED_CARROT",
        GOLDEN_CARROT: "GOLDEN_CARROT",
    }

    Recipes.registerFill("TIGHTLY_TIED_HAY_BALE", "ENCHANTED_HAY_BLOCK", 64)
    Recipes.registerFill("ENCHANTED_LEATHER", "LEATHER", 64)
    Recipes.registerFill("ENCHANTED_HARD_STONE", "HARD_STONE", 64)
    Recipes.registerSingle("ENCHANTED_GOLDEN_CARROT", null, null, list.ENCHANTED_CARROT, 32, null, null,
        list.ENCHANTED_CARROT, 32, list.ENCHANTED_CARROT, 32, list.ENCHANTED_CARROT, 32,
        null, null, list.ENCHANTED_CARROT, 32, null, null)

    return {
        list : list
    }
})()
