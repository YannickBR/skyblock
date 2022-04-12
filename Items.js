Items = (() => {
    let list = {
        ENCHANTED_CARROT: "ENCHANTED_CARROT",
        GOLDEN_CARROT: "GOLDEN_CARROT",
        ENCHANTED_BAKED_POTATO: "ENCHANTED_BAKED_POTATO",
        HOT_POTATO_BOOK: "HOT_POTATO_BOOK",
        GRAND_EXP_BOTTLE: "GRAND_EXP_BOTTLE",
        TITANIC_EXP_BOTTLE: "TITANIC_EXP_BOTTLE",
        ENCHANTED_LAPIS: "ENCHANTED_LAPIS_LAZULI",
        ENCHANTED_LAPIS_BLOCK: "ENCHANTED_LAPIS_LAZULI_BLOCK",
        ENCHANTED_REDSTONE_BLOCK: "ENCHANTED_REDSTONE_BLOCK",
        ENCHANTED_COBBLE: "ENCHANTED_COBBLESTONE",
        SUPER_COMPACTOR_3000: "SUPER_COMPACTOR_3000",
        ENCHANTED_IRON_INGOT: "ENCHANTED_IRON",
        ENCHANTED_COAL_BLOCK: "ENCHANTED_COAL_BLOCK",
        ENCHANTED_LAVA_BUCKET: "ENCHANTED_LAVA_BUCKET",

    }

    Recipes.registerFill("TIGHTLY_TIED_HAY_BALE", "ENCHANTED_HAY_BLOCK", 64)
    Recipes.registerFill("ENCHANTED_LEATHER", "LEATHER", 64)
    Recipes.registerFill("ENCHANTED_HARD_STONE", "HARD_STONE", 64)
    Recipes.registerSingle("ENCHANTED_GOLDEN_CARROT", null, null, list.ENCHANTED_CARROT, 32, null, null,
        list.ENCHANTED_CARROT, 32, list.ENCHANTED_CARROT, 32, list.ENCHANTED_CARROT, 32,
        null, null, list.ENCHANTED_CARROT, 32, null, null)
    Recipes.registerSingle("HOT_POTATO_BOOK", null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, list.ENCHANTED_BAKED_POTATO, 1)

    Recipes.registerSingle(list.TITANIC_EXP_BOTTLE,
        null, null, list.ENCHANTED_LAPIS_BLOCK, 1, null, null,
        list.ENCHANTED_LAPIS_BLOCK, 1, null, null, list.ENCHANTED_LAPIS_BLOCK, 1,
        list.ENCHANTED_LAPIS_BLOCK, 1, list.ENCHANTED_LAPIS_BLOCK, 1, list.ENCHANTED_LAPIS_BLOCK, 1)

    Recipes.registerSingle(list.GRAND_EXP_BOTTLE,
        null, null, list.ENCHANTED_LAPIS, 1, null, null,
        list.ENCHANTED_LAPIS, 1, null, null, list.ENCHANTED_LAPIS, 1,
        list.ENCHANTED_LAPIS, 1, list.ENCHANTED_LAPIS, 1, list.ENCHANTED_LAPIS, 1)

    Recipes.registerSingle(list.SUPER_COMPACTOR_3000,
        list.ENCHANTED_COBBLE, 64, list.ENCHANTED_COBBLE, 64, list.ENCHANTED_COBBLE, 64,
        list.ENCHANTED_COBBLE, 64, null, null, list.ENCHANTED_COBBLE, 64,
        list.ENCHANTED_COBBLE, 64, list.ENCHANTED_REDSTONE_BLOCK, 1, list.ENCHANTED_COBBLE, 64)

    Recipes.registerSingle(list.ENCHANTED_LAVA_BUCKET,
        null, null, null, null, null, null,
        list.ENCHANTED_IRON_INGOT, 1, list.ENCHANTED_COAL_BLOCK, 2, list.ENCHANTED_IRON_INGOT, 1,
        null, null, list.ENCHANTED_IRON_INGOT, 1, null, null)



    return {
        list : list
    }
})()
