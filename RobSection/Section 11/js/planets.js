var planets     = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var planetFacts = [
    'Mercury is the closest planet to the sun at a distance of about 58 million km (36 million miles) or 0.39 AU.',
    'Venus is the second closest planet to the sun at a distance of about 108 million km (67 million miles) or 0.72 AU.',
    'Earth is the third planet from the sun at a distance of about 150 million km (93 million miles) or one AU.',
    'Mars is the fourth planet from the sun at a distance of about 228 million km (142 million miles) or 1.52 AU.',
    'Jupiter is the fifth planet from the sun at a distance of about 778 million km (484 million miles) or 5.2 AU.',
    'Saturn is the sixth planet from the sun at a distance of about 1.4 billion km (886 million miles) or 9.5 AU.',
    'Uranus is the seventh planet from the sun at a distance of about 2.9 billion km (1.8 billion miles) or 19.19 AU.',
    'Neptune is the eighth planet from the sun at a distance of about 4.5 billion km (2.8 billion miles) or 30.07 AU.'
];
var moons       = [
    null,
    null,
    ['Our Moon'],
    ['Phobos', 'Deimos'],
    ['Io', 'Europa', 'Ganymede', 'Callisto', 'Amalthea', 'Himalia', 'Elara', 'Pasiphae', 'Sinope', 'Lysithea', 'Carme', 'Ananke', 'Leda',
        'Thebe', 'Adrastea', 'Metis', 'Callirrhoe', 'Themisto', 'Megaclite', 'Taygete', 'Chaldene', 'Harpalyke', 'Kalyke', 'Iocaste', 'Erinome',
        'Isonoe', 'Praxidike', 'Autonoe', 'Thyone', 'Hermippe', 'Aitne', 'Eurydome', 'Euanthe', 'Euporie', 'Orthosie', 'Sponde', 'Kale', 'Pasithee',
        'Hegemone', 'Mneme', 'Aoede', 'Thelxinoe', 'Arche', 'Kallichore', 'Helike', 'Carpo', 'Eukelade', 'Cyllene', 'Kore', 'Herse'],
    ['Mimas', 'Enceladus', 'Tethys', 'Dione', 'Rhea', 'Titan', 'Hyperion', 'Iapetus', 'Erriapus', 'Phoebe', 'Janus', 'Epimetheus', 'Helene',
        'Telesto', 'Calypso', 'Kiviuq', 'Atlas', 'Prometheus', 'Pandora', 'Pan', 'Ymir', 'Paaliaq', 'Tarvos', 'Ijiraq', 'Suttungr', 'Mundilfari',
        'Albiorix', 'Skathi', 'Siarnaq', 'Thrymr', 'Narvi', 'Methone', 'Pallene', 'Polydeuces', 'Daphnis', 'Aegir', 'Bebhionn', 'Bergelmir',
        'Bestla', 'Farbauti', 'Fenrir', 'Fornjot', 'Hati', 'Hyrrokkin', 'Kari', 'Loge', 'Skoll', 'Surtur', 'Greip', 'Jarnsaxa', 'Tarqeq', 'Anthe',
        'Aegaeon'],
    ['Cordelia', 'Ophelia', 'Bianca', 'Cressida', 'Desdemona', 'Juliet', 'Portia', 'Rosalind', 'Mab', 'Belinda', 'Perdita', 'Puck', 'Cupid',
        'Miranda', 'Francisco', 'Ariel', 'Umbriel', 'Titania', 'Oberon', 'Caliban', 'Stephano', 'Trinculo', 'Sycorax', 'Margaret', 'Prospero',
        'Setebos', 'Ferdinand'],
    ['Triton', 'Nereid', 'Naiad', 'Thalassa', 'Despina', 'Galatea', 'Larissa', 'Proteus', 'Halimede', 'Psamathe', 'Sao', 'Laomedeia', 'Neso'],
];