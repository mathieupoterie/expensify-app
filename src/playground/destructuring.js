const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [type, , mediumPrice] = item;

console.log(`A ${type} costs ${mediumPrice}`);