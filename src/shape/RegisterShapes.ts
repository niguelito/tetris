import Color from "../renderer/Color";
import Difficulty from "../state/Difficulty";
import { ShapeRegistry } from "./ShapeRegistry";
import ShapeWeights from "./ShapeWeights";

export default function registerShapes() {
    ShapeRegistry.register({
        name: 'T',
        credit: "Original",
        shape: [
            [0, 0, 0],
            [0, 1, 0],
            [1, 1, 1],
        ],
        weight: ShapeWeights.VERY_COMMON,
        color: Color.hex(0xFF0D72),
        minDiff: Difficulty.EASY
    });

    ShapeRegistry.register({
        name: 'O',
        credit: "Original",
        shape: [
            [1, 1],
            [1, 1],
        ],
        weight: ShapeWeights.VERY_COMMON,
        color: Color.hex(0x0DC2FF),
        minDiff: Difficulty.EASY
    });

    ShapeRegistry.register({
        name: 'I',
        credit: "Original",
        shape: [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
        ],
        weight: ShapeWeights.VERY_COMMON,
        color: Color.hex(0x0DFF72),
        minDiff: Difficulty.EASY
    });

    ShapeRegistry.register({
        name: 'L',
        credit: "Original",
        shape: [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1],
        ],
        weight: ShapeWeights.VERY_COMMON,
        color: Color.hex(0xF538FF),
        minDiff: Difficulty.EASY
    });

    ShapeRegistry.register({
        name: 'J',
        credit: "Original",
        shape: [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0],
        ],
        weight: ShapeWeights.VERY_COMMON,
        color: Color.hex(0xFF8E0D),
        minDiff: Difficulty.EASY
    });

    ShapeRegistry.register({
        name: 'S',
        credit: "Original",
        shape: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0],
        ],
        weight: ShapeWeights.VERY_COMMON,
        color: Color.hex(0xFFE138),
        minDiff: Difficulty.EASY
    });

    ShapeRegistry.register({
        name: 'Z',
        credit: "Original",
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0],
        ],
        weight: ShapeWeights.VERY_COMMON,
        color: Color.hex(0x3877FF),
        minDiff: Difficulty.EASY
    });
    
    ShapeRegistry.register({
        name: 'Dot',
        credit: "Jackson",
        shape: [
            [1]
        ],
        weight: ShapeWeights.VERY_COMMON,
        color: Color.hex(0x55E096),
        minDiff: Difficulty.NORMAL
    });

    ShapeRegistry.register({
        name: 'Cube',
        credit: "Jackson",
        shape: [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ],
        weight: ShapeWeights.COMMON,
        color: Color.hex(0xD0E667),
        minDiff: Difficulty.NORMAL
    });

    ShapeRegistry.register({
        name: 'Line10',
        credit: "Jackson",
        shape: [
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
        ],
        weight: ShapeWeights.UNCOMMON,
        color: Color.hex(0x5E538C),
        minDiff: Difficulty.MEDIUM
    });
    
    ShapeRegistry.register({
        name: 'Line5',
        credit: "Jackson",
        shape: [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ],
        weight: ShapeWeights.COMMON,
        color: Color.hex(0x0dffcb),
        minDiff: Difficulty.NORMAL
    });

    ShapeRegistry.register({
        name: 'Line7',
        credit: "Jackson",
        shape: [
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0]
        ],
        weight: ShapeWeights.COMMON,
        color: Color.hex(0x9de055),
        minDiff: Difficulty.MEDIUM
    });

    ShapeRegistry.register({
        name: 'L2',
        credit: "Jackson",
        shape: [
            [1, 1],
            [0, 0]
        ],
        weight: ShapeWeights.COMMON,
        color: Color.hex(0x701170),
        minDiff: Difficulty.NORMAL
    });

    ShapeRegistry.register({
        name: 'Rectangle12',
        credit: "Jackson",
        shape: [
            [1, 1, 1],
            [1, 1, 1],
            [0, 0, 0]
        ],
        weight: ShapeWeights.UNCOMMON,
        color: Color.hex(0xe69c67),
        minDiff: Difficulty.NORMAL
    });

    ShapeRegistry.register({
        name: 'T',
        credit: "Jackson",
        shape: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 1, 0]
        ],
        weight: ShapeWeights.COMMON,
        color: Color.hex(0xB603FC),
        minDiff: Difficulty.HARD
    });

    ShapeRegistry.register({
        name: 'Rectangle24',
        credit: "Jackson",
        shape: [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0]
        ],
        weight: ShapeWeights.COMMON,
        color: Color.hex(0xe66787),
        minDiff: Difficulty.MEDIUM
    });

    ShapeRegistry.register({
        name: 'The Twin Towers',
        credit: "Jackson",
        shape: [
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1]
        ],
        weight: ShapeWeights.UNCOMMON,
        color: Color.hex(0xe3cf5d),
        minDiff: Difficulty.HARD
    });

    ShapeRegistry.register({
        name: 'Smile',
        credit: "Martin",
        shape: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 1, 1, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        weight: ShapeWeights.RARE,
        color: Color.hex(0x8f1414),
        minDiff: Difficulty.IMPOSSIBLE
    });

    ShapeRegistry.register({
        name: 'Dots',
        credit: "Miguel",
        shape: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        weight: ShapeWeights.UNCOMMON,
        color: Color.hex(0x6e438f),
        minDiff: Difficulty.HARD
    });

    ShapeRegistry.register({
        name: 'Wall',
        credit: "Miguel",
        shape: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        weight: ShapeWeights.RARE,
        color: Color.hex(0xb2bf9f),
        minDiff: Difficulty.HARD
    });

    ShapeRegistry.register({
        name: 'The Dibbeldidoop',
        credit: "Duncan",
        shape: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        weight: ShapeWeights.RARE,
        color: Color.hex(0x587d36),
        minDiff: Difficulty.IMPOSSIBLE
    });
    
    ShapeRegistry.register({
        name: 'The Calamity',
        credit: "ChatGPT",
        shape: [
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 1]
        ],
        weight: ShapeWeights.RARE,
        color: Color.hex(0xFF4500),
        minDiff: Difficulty.IMPOSSIBLE
    });

    ShapeRegistry.register({
        name: 'The Uterus',
        credit: "Microsoft Copilot",
        shape: [
            [0, 1, 1, 0], 
            [1, 1, 0, 0], 
            [0, 1, 0, 0], 
            [0, 1, 1, 1]
        ],
        weight: ShapeWeights.RARE,
        color: Color.hex(0x8B008B),
        minDiff: Difficulty.IMPOSSIBLE
    });

    ShapeRegistry.register({
        name: 'Average Black Guy',
        credit: "Duncan",
        shape: [
            [0, 0, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0]   
        ],
        weight: ShapeWeights.COMMON,
        color: Color.hex(0x4f3528),
        minDiff: Difficulty.HARD
    });

    ShapeRegistry.register({
        name: 'The Nullifier',
        credit: "Google Gemini",
        shape: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        weight: ShapeWeights.RARE,
        color: Color.hex(0x3d3d3d),
        minDiff: Difficulty.IMPOSSIBLE
    });

    ShapeRegistry.register({
        name: 'Can you see it?',
        credit: "Duncan",
        shape: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0]
        ],
        weight: ShapeWeights.COMMON,
        color: Color.hex(0x060505),
        minDiff: Difficulty.HARD
    });

    ShapeRegistry.register({
        name: 'Scull',
        credit: "Duncan",
        shape: [
            [1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1]
        ],
        weight: ShapeWeights.RARE,
        color: Color.hex(0xff08ea),
        minDiff: Difficulty.IMPOSSIBLE
    });

    ShapeRegistry.register({
        name: 'The Goal',
        credit: "Jackson",
        shape: [
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1]
        ],
        weight: ShapeWeights.UNCOMMON,
        color: Color.hex(0x423a4a),
        minDiff: Difficulty.IMPOSSIBLE
    });

    ShapeRegistry.register({
        name: "Potato Chip",
        credit: "Duncan",
        shape: [
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 0, 0, 0]
        ],
        weight: ShapeWeights.UNCOMMON,
        color: Color.hex(0xf7d65c),
        minDiff: Difficulty.HARD
    });
}
