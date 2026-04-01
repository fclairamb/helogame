const TILE = 32;
const WALK_SPEED = 120;
const JUMP_SPEED = -550;
const GRAVITY = 800;
const CAR_SPEED = 300;

function createPrincessTexture(scene) {
    // Draw a cute pixel-art princess (32x48)
    const g = scene.make.graphics({ x: 0, y: 0, add: false });

    // Dress (pink)
    g.fillStyle(0xff69b4);
    g.fillRect(8, 24, 16, 20);
    // Dress bottom flare
    g.fillRect(4, 36, 24, 8);

    // Skin (face & arms)
    g.fillStyle(0xffdbac);
    g.fillRect(10, 8, 12, 14);  // face
    g.fillRect(4, 26, 6, 10);   // left arm
    g.fillRect(22, 26, 6, 10);  // right arm

    // Hair (golden)
    g.fillStyle(0xffd700);
    g.fillRect(8, 2, 16, 10);   // top hair
    g.fillRect(6, 6, 4, 18);    // left hair
    g.fillRect(22, 6, 4, 18);   // right hair

    // Crown
    g.fillStyle(0xffd700);
    g.fillRect(10, 0, 12, 4);
    g.fillStyle(0xff0000);
    g.fillRect(14, 0, 4, 2);    // ruby

    // Eyes
    g.fillStyle(0x2244aa);
    g.fillRect(12, 14, 3, 3);
    g.fillRect(18, 14, 3, 3);

    // Smile
    g.fillStyle(0xff6688);
    g.fillRect(14, 19, 5, 2);

    // Shoes
    g.fillStyle(0xff1493);
    g.fillRect(8, 44, 7, 4);
    g.fillRect(17, 44, 7, 4);

    g.generateTexture('princess', 32, 48);
    g.destroy();
}

function createWalkTexture(scene) {
    const g = scene.make.graphics({ x: 0, y: 0, add: false });

    // Same princess but with legs apart (walking frame)
    g.fillStyle(0xff69b4);
    g.fillRect(8, 24, 16, 18);
    g.fillRect(4, 34, 24, 8);

    g.fillStyle(0xffdbac);
    g.fillRect(10, 8, 12, 14);
    g.fillRect(4, 26, 6, 10);
    g.fillRect(22, 26, 6, 10);

    g.fillStyle(0xffd700);
    g.fillRect(8, 2, 16, 10);
    g.fillRect(6, 6, 4, 18);
    g.fillRect(22, 6, 4, 18);

    g.fillStyle(0xffd700);
    g.fillRect(10, 0, 12, 4);
    g.fillStyle(0xff0000);
    g.fillRect(14, 0, 4, 2);

    g.fillStyle(0x2244aa);
    g.fillRect(12, 14, 3, 3);
    g.fillRect(18, 14, 3, 3);

    g.fillStyle(0xff6688);
    g.fillRect(14, 19, 5, 2);

    // Shoes spread apart
    g.fillStyle(0xff1493);
    g.fillRect(5, 44, 7, 4);
    g.fillRect(20, 44, 7, 4);

    g.generateTexture('princess_walk', 32, 48);
    g.destroy();
}

function createGroundTextures(scene) {
    // Grass tile
    const g = scene.make.graphics({ x: 0, y: 0, add: false });
    g.fillStyle(0x4a8f3f);
    g.fillRect(0, 0, TILE, TILE);
    g.fillStyle(0x5aaf4f);
    g.fillRect(0, 0, TILE, 6);
    // Little grass blades
    g.fillStyle(0x6abf5f);
    for (let i = 2; i < TILE; i += 6) {
        g.fillRect(i, 0, 2, 3);
    }
    g.generateTexture('grass', TILE, TILE);
    g.destroy();

    // Dirt tile
    const d = scene.make.graphics({ x: 0, y: 0, add: false });
    d.fillStyle(0x8b6914);
    d.fillRect(0, 0, TILE, TILE);
    d.fillStyle(0x7a5a10);
    d.fillRect(4, 8, 6, 4);
    d.fillRect(18, 16, 8, 4);
    d.fillRect(8, 24, 4, 4);
    d.generateTexture('dirt', TILE, TILE);
    d.destroy();
}

function createCloudTexture(scene) {
    const g = scene.make.graphics({ x: 0, y: 0, add: false });
    g.fillStyle(0xffffff, 0.8);
    g.fillCircle(30, 30, 20);
    g.fillCircle(55, 25, 25);
    g.fillCircle(80, 30, 20);
    g.fillCircle(45, 20, 18);
    g.fillCircle(65, 18, 18);
    g.generateTexture('cloud', 110, 55);
    g.destroy();
}

function createPoliceCarTexture(scene) {
    const g = scene.make.graphics({ x: 0, y: 0, add: false });
    // Car body (white)
    g.fillStyle(0xffffff);
    g.fillRect(10, 16, 80, 28);
    // Roof
    g.fillRect(30, 4, 36, 14);
    // Hood & trunk
    g.fillStyle(0xe8e8e8);
    g.fillRect(4, 20, 10, 20);
    g.fillRect(86, 20, 10, 20);
    // Blue stripe
    g.fillStyle(0x0044cc);
    g.fillRect(10, 28, 80, 6);
    // "POLICE" text area
    g.fillStyle(0x0044cc);
    g.fillRect(32, 32, 36, 8);
    // Siren light (red)
    g.fillStyle(0xff0000);
    g.fillRect(42, 0, 8, 6);
    // Siren light (blue)
    g.fillStyle(0x0066ff);
    g.fillRect(52, 0, 8, 6);
    // Windows
    g.fillStyle(0x88ccff);
    g.fillRect(34, 6, 14, 10);
    g.fillRect(52, 6, 14, 10);
    // Wheels
    g.fillStyle(0x222222);
    g.fillCircle(26, 44, 8);
    g.fillCircle(74, 44, 8);
    // Wheel caps
    g.fillStyle(0x888888);
    g.fillCircle(26, 44, 3);
    g.fillCircle(74, 44, 3);
    // Headlights
    g.fillStyle(0xffff00);
    g.fillRect(88, 22, 6, 4);
    g.fillRect(6, 22, 6, 4);
    g.generateTexture('police_car', 100, 52);
    g.destroy();
}

function createFlowerTexture(scene) {
    const g = scene.make.graphics({ x: 0, y: 0, add: false });
    // Stem
    g.fillStyle(0x228b22);
    g.fillRect(6, 8, 2, 10);
    // Petals
    g.fillStyle(0xff69b4);
    g.fillCircle(7, 5, 4);
    g.fillStyle(0xffff00);
    g.fillCircle(7, 5, 2);
    g.generateTexture('flower', 14, 18);
    g.destroy();
}

function createKingTexture(scene) {
    const g = scene.make.graphics({ x: 0, y: 0, add: false });

    // Royal robe (blue)
    g.fillStyle(0x2244aa);
    g.fillRect(6, 24, 20, 20);
    // Robe bottom
    g.fillRect(4, 36, 24, 8);

    // Skin (face & arms)
    g.fillStyle(0xffdbac);
    g.fillRect(10, 8, 12, 14);  // face
    g.fillRect(2, 26, 6, 10);   // left arm
    g.fillRect(24, 26, 6, 10);  // right arm

    // Beard (brown)
    g.fillStyle(0x8b4513);
    g.fillRect(10, 18, 12, 6);

    // Hair (brown)
    g.fillStyle(0x8b4513);
    g.fillRect(8, 6, 16, 6);
    g.fillRect(6, 8, 4, 10);
    g.fillRect(22, 8, 4, 10);

    // Crown (gold, bigger than princess)
    g.fillStyle(0xffd700);
    g.fillRect(8, 0, 16, 6);
    g.fillRect(6, 2, 4, 4);
    g.fillRect(22, 2, 4, 4);
    // Jewels
    g.fillStyle(0xff0000);
    g.fillRect(11, 1, 3, 3);
    g.fillStyle(0x00ff00);
    g.fillRect(18, 1, 3, 3);

    // Eyes
    g.fillStyle(0x2244aa);
    g.fillRect(12, 12, 3, 3);
    g.fillRect(18, 12, 3, 3);

    // Gold belt
    g.fillStyle(0xffd700);
    g.fillRect(6, 34, 20, 3);

    // Boots (brown)
    g.fillStyle(0x654321);
    g.fillRect(8, 44, 7, 4);
    g.fillRect(17, 44, 7, 4);

    g.generateTexture('king', 32, 48);
    g.destroy();
}

function createKingWalkTexture(scene) {
    const g = scene.make.graphics({ x: 0, y: 0, add: false });

    g.fillStyle(0x2244aa);
    g.fillRect(6, 24, 20, 18);
    g.fillRect(4, 34, 24, 8);

    g.fillStyle(0xffdbac);
    g.fillRect(10, 8, 12, 14);
    g.fillRect(2, 26, 6, 10);
    g.fillRect(24, 26, 6, 10);

    g.fillStyle(0x8b4513);
    g.fillRect(10, 18, 12, 6);
    g.fillRect(8, 6, 16, 6);
    g.fillRect(6, 8, 4, 10);
    g.fillRect(22, 8, 4, 10);

    g.fillStyle(0xffd700);
    g.fillRect(8, 0, 16, 6);
    g.fillRect(6, 2, 4, 4);
    g.fillRect(22, 2, 4, 4);
    g.fillStyle(0xff0000);
    g.fillRect(11, 1, 3, 3);
    g.fillStyle(0x00ff00);
    g.fillRect(18, 1, 3, 3);

    g.fillStyle(0x2244aa);
    g.fillRect(12, 12, 3, 3);
    g.fillRect(18, 12, 3, 3);

    g.fillStyle(0xffd700);
    g.fillRect(6, 34, 20, 3);

    // Boots spread apart
    g.fillStyle(0x654321);
    g.fillRect(5, 44, 7, 4);
    g.fillRect(20, 44, 7, 4);

    g.generateTexture('king_walk', 32, 48);
    g.destroy();
}

function createCastleTexture(scene) {
    const g = scene.make.graphics({ x: 0, y: 0, add: false });
    const w = 200, h = 220;

    // Main body (stone gray)
    g.fillStyle(0x999999);
    g.fillRect(20, 60, 160, 160);

    // Towers (left & right)
    g.fillStyle(0x888888);
    g.fillRect(0, 30, 40, 190);
    g.fillRect(160, 30, 40, 190);

    // Tower tops (crenellations)
    g.fillStyle(0x777777);
    for (let i = 0; i < 40; i += 12) {
        g.fillRect(i, 20, 8, 14);
        g.fillRect(160 + i, 20, 8, 14);
    }
    // Main wall crenellations
    for (let i = 40; i < 160; i += 14) {
        g.fillRect(i, 50, 10, 14);
    }

    // Big center tower
    g.fillStyle(0x888888);
    g.fillRect(60, 10, 80, 60);
    for (let i = 60; i < 140; i += 14) {
        g.fillRect(i, 0, 10, 14);
    }

    // Gate (dark archway)
    g.fillStyle(0x442200);
    g.fillRect(70, 140, 60, 80);
    g.fillStyle(0x442200);
    g.fillCircle(100, 140, 30);

    // Windows
    g.fillStyle(0x88ccff);
    g.fillRect(12, 80, 16, 20);
    g.fillRect(172, 80, 16, 20);
    g.fillRect(80, 30, 14, 18);
    g.fillRect(106, 30, 14, 18);

    // Flag pole on top
    g.fillStyle(0x654321);
    g.fillRect(98, -20, 4, 30);
    // Flag (pink)
    g.fillStyle(0xff69b4);
    g.fillTriangle(102, -20, 102, -5, 120, -12);

    g.generateTexture('castle', w, h);
    g.destroy();
}

function createAmbulanceTexture(scene) {
    const g = scene.make.graphics({ x: 0, y: 0, add: false });
    // Body (white)
    g.fillStyle(0xffffff);
    g.fillRect(10, 12, 80, 32);
    // Back box (taller)
    g.fillRect(4, 4, 50, 40);
    // Red stripe
    g.fillStyle(0xff0000);
    g.fillRect(4, 28, 86, 4);
    // Red cross on side
    g.fillStyle(0xff0000);
    g.fillRect(20, 10, 16, 4);
    g.fillRect(26, 6, 4, 12);
    // Windshield
    g.fillStyle(0x88ccff);
    g.fillRect(60, 14, 16, 14);
    // Back window
    g.fillStyle(0x88ccff);
    g.fillRect(8, 8, 12, 12);
    // Light bar (red + white)
    g.fillStyle(0xff0000);
    g.fillRect(14, 0, 10, 5);
    g.fillStyle(0xffffff);
    g.fillRect(26, 0, 10, 5);
    // Wheels
    g.fillStyle(0x222222);
    g.fillCircle(24, 46, 7);
    g.fillCircle(74, 46, 7);
    g.fillStyle(0x888888);
    g.fillCircle(24, 46, 3);
    g.fillCircle(74, 46, 3);

    g.generateTexture('ambulance', 100, 52);
    g.destroy();
}

function createPawPatrolTexture(scene, name, bodyColor, letter) {
    const g = scene.make.graphics({ x: 0, y: 0, add: false });
    // Body
    g.fillStyle(bodyColor);
    g.fillRect(6, 16, 20, 20);
    // Head
    g.fillStyle(0xddbb88);
    g.fillRect(8, 4, 16, 14);
    // Ears
    g.fillStyle(bodyColor);
    g.fillRect(6, 0, 6, 8);
    g.fillRect(20, 0, 6, 8);
    // Eyes
    g.fillStyle(0x000000);
    g.fillRect(11, 8, 3, 3);
    g.fillRect(18, 8, 3, 3);
    // Nose
    g.fillStyle(0x333333);
    g.fillRect(14, 13, 4, 3);
    // Legs
    g.fillStyle(bodyColor);
    g.fillRect(8, 36, 6, 8);
    g.fillRect(18, 36, 6, 8);
    // Paws
    g.fillStyle(0xddbb88);
    g.fillRect(7, 42, 8, 4);
    g.fillRect(17, 42, 8, 4);
    // Badge/letter
    g.fillStyle(0xffd700);
    g.fillCircle(16, 24, 6);
    g.fillStyle(0x000000);
    // Simple marker for identification
    g.fillRect(14, 22, 4, 4);

    g.generateTexture(name, 32, 46);
    g.destroy();
}

function createPawBallTexture(scene) {
    const g = scene.make.graphics({ x: 0, y: 0, add: false });
    g.fillStyle(0xff4444);
    g.fillCircle(8, 8, 8);
    g.fillStyle(0xff8888);
    g.fillCircle(6, 6, 3);
    g.generateTexture('paw_ball', 16, 16);
    g.destroy();
}

function createBombTexture(scene) {
    const g = scene.make.graphics({ x: 0, y: 0, add: false });
    // Bomb body (black circle)
    g.fillStyle(0x222222);
    g.fillCircle(12, 16, 10);
    // Fuse
    g.lineStyle(2, 0x8b4513);
    g.beginPath();
    g.moveTo(12, 6);
    g.lineTo(14, 2);
    g.lineTo(18, 0);
    g.strokePath();
    // Spark
    g.fillStyle(0xff6600);
    g.fillCircle(18, 0, 3);
    g.fillStyle(0xffff00);
    g.fillCircle(18, 0, 1.5);
    // Highlight
    g.fillStyle(0x555555);
    g.fillCircle(9, 13, 3);
    g.generateTexture('bomb', 24, 28);
    g.destroy();
}

function createExplosionTexture(scene) {
    const g = scene.make.graphics({ x: 0, y: 0, add: false });
    g.fillStyle(0xff4400, 0.8);
    g.fillCircle(32, 32, 32);
    g.fillStyle(0xff8800, 0.6);
    g.fillCircle(32, 32, 22);
    g.fillStyle(0xffcc00, 0.5);
    g.fillCircle(32, 32, 12);
    g.generateTexture('explosion', 64, 64);
    g.destroy();
}

class GameScene extends Phaser.Scene {
    constructor() {
        super('game');
    }

    create() {
        this.gameOver = false;

        // Generate textures
        createPrincessTexture(this);
        createWalkTexture(this);
        createGroundTextures(this);
        createCloudTexture(this);
        createFlowerTexture(this);
        createPoliceCarTexture(this);
        createKingTexture(this);
        createKingWalkTexture(this);
        createBombTexture(this);
        createExplosionTexture(this);
        createCastleTexture(this);
        createAmbulanceTexture(this);
        createPawPatrolTexture(this, 'paw_chase', 0x2266cc, 'C');   // Chase - blue
        createPawPatrolTexture(this, 'paw_marshall', 0xcc2222, 'M'); // Marshall - red
        createPawPatrolTexture(this, 'paw_skye', 0xff66aa, 'S');     // Skye - pink
        createPawBallTexture(this);

        // Sky gradient background
        this.cameras.main.setBackgroundColor('#87ceeb');

        const worldWidth = 6400;

        // Ground (flat) - separate group so cars only collide with this
        this.groundGroup = this.physics.add.staticGroup();
        for (let x = 0; x < worldWidth; x += TILE) {
            this.groundGroup.create(x + TILE / 2, 568, 'grass');
            this.groundGroup.create(x + TILE / 2, 600, 'dirt');
        }

        // Platforms (elevated green blocks) - separate group, cars don't collide
        this.platformGroup = this.physics.add.staticGroup();
        this.platformTiles = []; // track individual tiles for explosion
        const platforms = [
            { x: 400, y: 500, len: 4 },
            { x: 700, y: 470, len: 3 },
            { x: 1100, y: 490, len: 5 },
            { x: 1600, y: 460, len: 3 },
            { x: 2100, y: 500, len: 4 },
            { x: 2600, y: 470, len: 3 },
            { x: 3200, y: 490, len: 5 },
        ];
        for (const p of platforms) {
            for (let i = 0; i < p.len; i++) {
                const tile = this.platformGroup.create(p.x + i * TILE + TILE / 2, p.y, 'grass');
                this.platformTiles.push(tile);
            }
        }

        // Clouds (decorative, parallax-ish)
        for (let i = 0; i < 20; i++) {
            const cx = Phaser.Math.Between(0, worldWidth);
            const cy = Phaser.Math.Between(40, 200);
            const cloud = this.add.image(cx, cy, 'cloud');
            cloud.setAlpha(0.6 + Math.random() * 0.3);
            cloud.setScale(0.5 + Math.random() * 0.8);
            cloud.setScrollFactor(0.3);
        }

        // Flowers (decorative)
        for (let i = 0; i < 40; i++) {
            const fx = Phaser.Math.Between(50, worldWidth - 50);
            this.add.image(fx, 550, 'flower');
        }

        // Police cars - only collide with ground, NOT platforms
        this.policeCars = this.physics.add.group();
        const carPositions = [300, 950, 1900, 3000, 4200];
        for (const cx of carPositions) {
            const car = this.policeCars.create(cx, 400, 'police_car');
            car.setScale(1.2);
            car.setBounce(0);
            car.body.setGravityY(GRAVITY);
            car.body.setSize(90, 40);
            car.body.setOffset(5, 8);
            car.body.setMass(1000);
        }
        this.physics.add.collider(this.policeCars, this.groundGroup);
        // NO collider between policeCars and platformGroup

        // Driving state
        this.inCar = false;
        this.currentCar = null;

        // Lives
        this.princessLives = 3;
        this.kingLives = 3;
        this.respawning = false;

        // Princess
        this.princess = this.physics.add.sprite(100, 500, 'princess');
        this.princess.setBounce(0.1);
        this.princess.setCollideWorldBounds(false);
        this.princess.body.setGravityY(GRAVITY);
        this.princess.setScale(1.5);
        this.princess.body.setSize(20, 44);
        this.princess.body.setOffset(6, 4);

        // Walk animation
        this.anims.create({
            key: 'walk',
            frames: [
                { key: 'princess' },
                { key: 'princess_walk' },
            ],
            frameRate: 6,
            repeat: -1,
        });

        // King - follows the princess
        this.king = this.physics.add.sprite(30, 500, 'king');
        this.king.setBounce(0.1);
        this.king.body.setGravityY(GRAVITY);
        this.king.setScale(1.5);
        this.king.body.setSize(20, 44);
        this.king.body.setOffset(6, 4);

        this.anims.create({
            key: 'king_walk',
            frames: [
                { key: 'king' },
                { key: 'king_walk' },
            ],
            frameRate: 5,
            repeat: -1,
        });

        this.physics.add.collider(this.king, this.groundGroup);
        this.physics.add.collider(this.king, this.platformGroup);
        this.physics.add.collider(this.king, this.policeCars);
        this.physics.add.collider(this.king, this.ambulances);

        // Collision - princess collides with both ground and platforms
        this.physics.add.collider(this.princess, this.groundGroup);
        this.physics.add.collider(this.princess, this.platformGroup);

        // Collide with ambulances
        this.physics.add.collider(this.princess, this.ambulances);

        // Collide with police cars - track when on top
        this.physics.add.collider(this.princess, this.policeCars, (princess, car) => {
            if (princess.body.touching.down && car.body.touching.up) {
                this.onTopOfCar = car;
            }
            this.nearCar = car;
        });

        // Enter/exit car cooldown
        this.enterCarCooldown = 0;
        this.onTopOfCar = null;

        // Bomb pickups
        this.bombs = this.physics.add.group();
        this.bombCount = 0;
        const bombPositions = [500, 850, 1300, 1800, 2300, 2800, 3400, 4000, 4600, 5200];
        for (const bx of bombPositions) {
            const bomb = this.bombs.create(bx, 520, 'bomb');
            bomb.body.setGravityY(GRAVITY);
            bomb.body.setSize(20, 24);
            bomb.setBounce(0.3);
        }
        this.physics.add.collider(this.bombs, this.groundGroup);
        this.physics.add.collider(this.bombs, this.platformGroup);
        this.physics.add.overlap(this.princess, this.bombs, (princess, bomb) => {
            bomb.destroy();
            this.bombCount++;
            this.updateUI();
        });

        // Castle at the end of the level
        this.castle = this.add.image(worldWidth - 200, 440, 'castle');
        this.castle.setScale(1.5);
        this.castle.setDepth(1);
        this.castleReached = false;

        // Ambulances - prince can ride these
        this.ambulances = this.physics.add.group();
        const ambulancePositions = [600, 1500, 2500, 3800, 5000];
        for (const ax of ambulancePositions) {
            const amb = this.ambulances.create(ax, 400, 'ambulance');
            amb.setScale(1.2);
            amb.setBounce(0);
            amb.body.setGravityY(GRAVITY);
            amb.body.setSize(90, 40);
            amb.body.setOffset(5, 8);
            amb.body.setMass(1000);
        }
        this.physics.add.collider(this.ambulances, this.groundGroup);
        this.kingInAmbulance = false;
        this.currentAmbulance = null;

        // Paw Patrol characters in the sky
        this.pawPatrolChars = [];
        this.pawBalls = this.physics.add.group();
        const pawData = [
            { x: 400, texture: 'paw_chase' },
            { x: 1200, texture: 'paw_marshall' },
            { x: 2000, texture: 'paw_chase' },
            { x: 2800, texture: 'paw_skye' },
            { x: 3600, texture: 'paw_marshall' },
            { x: 4400, texture: 'paw_skye' },
            { x: 5200, texture: 'paw_chase' },
        ];
        for (const pd of pawData) {
            const paw = this.add.sprite(pd.x, Phaser.Math.Between(60, 140), pd.texture);
            paw.setScale(1.5);
            paw.setDepth(2);
            paw.baseX = pd.x;
            paw.baseY = paw.y;
            paw.lastFire = 0;
            paw.fireInterval = Phaser.Math.Between(2000, 4000);
            this.pawPatrolChars.push(paw);
        }

        // Paw ball collisions
        this.physics.add.collider(this.pawBalls, this.groundGroup, (ball) => {
            ball.destroy();
        });
        this.physics.add.collider(this.pawBalls, this.platformGroup, (ball) => {
            ball.destroy();
        });
        this.physics.add.overlap(this.princess, this.pawBalls, (princess, ball) => {
            if (this.respawning) return;
            ball.destroy();
            this.princessLives--;
            this.updateUI();
            if (this.princessLives <= 0) {
                this.triggerGameOver('The princess was hit too many times!');
            } else {
                this.respawnPrincess();
            }
        });
        this.physics.add.overlap(this.king, this.pawBalls, (king, ball) => {
            if (this.respawning || this.kingInAmbulance) return;
            ball.destroy();
            this.kingLives--;
            this.updateUI();
            if (this.kingLives <= 0) {
                this.triggerGameOver('The prince was hit too many times!');
            } else {
                this.respawnKing();
            }
        });

        // Space key for using bombs
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Camera
        this.cameras.main.startFollow(this.princess, true, 0.1, 0.1);
        this.cameras.main.setDeadzone(100, 50);
        this.physics.world.setBounds(0, 0, worldWidth, 800);

        // Controls
        this.cursors = this.input.keyboard.createCursorKeys();
        this.facingRight = true;
        this.autoWalk = true;

        // UI text
        this.uiText = this.add.text(16, 16, '', {
            fontSize: '16px',
            fill: '#fff',
            backgroundColor: '#00000066',
            padding: { x: 8, y: 4 },
        });
        this.uiText.setScrollFactor(0);
        this.uiText.setDepth(10);

        // Lives display - right side of screen
        this.princessLivesText = this.add.text(784, 16, '', {
            fontSize: '18px',
            fill: '#ff69b4',
            fontStyle: 'bold',
            stroke: '#000',
            strokeThickness: 2,
        });
        this.princessLivesText.setOrigin(1, 0);
        this.princessLivesText.setScrollFactor(0);
        this.princessLivesText.setDepth(10);

        this.kingLivesText = this.add.text(784, 40, '', {
            fontSize: '18px',
            fill: '#2244aa',
            fontStyle: 'bold',
            stroke: '#000',
            strokeThickness: 2,
        });
        this.kingLivesText.setOrigin(1, 0);
        this.kingLivesText.setScrollFactor(0);
        this.kingLivesText.setDepth(10);

        this.updateUI();

        // Game over text (hidden)
        this.gameOverText = this.add.text(400, 250, 'GAME OVER', {
            fontSize: '64px',
            fill: '#ff0000',
            fontStyle: 'bold',
            stroke: '#000',
            strokeThickness: 6,
        });
        this.gameOverText.setOrigin(0.5);
        this.gameOverText.setScrollFactor(0);
        this.gameOverText.setDepth(20);
        this.gameOverText.setVisible(false);

        this.restartText = this.add.text(400, 330, 'Press SPACE to restart', {
            fontSize: '24px',
            fill: '#fff',
            stroke: '#000',
            strokeThickness: 3,
        });
        this.restartText.setOrigin(0.5);
        this.restartText.setScrollFactor(0);
        this.restartText.setDepth(20);
        this.restartText.setVisible(false);

        // Walking frame timer
        this.walkTimer = 0;

        // Touch controls
        this.touchInput = { left: false, right: false, up: false, down: false, space: false };
        this.isMobile = !this.sys.game.device.os.desktop;
        if (this.isMobile) {
            this.createTouchControls();
        }
    }

    createTouchControls() {
        const btnAlpha = 0.35;
        const btnDepth = 30;
        const g = this.add.graphics();
        g.setScrollFactor(0);
        g.setDepth(btnDepth - 1);
        g.setAlpha(btnAlpha);

        // Left button
        g.fillStyle(0xffffff);
        g.fillCircle(70, 520, 36);
        const leftZone = this.add.zone(70, 520, 72, 72).setScrollFactor(0).setDepth(btnDepth).setInteractive();
        this.add.text(70, 520, '\u25C0', { fontSize: '28px', fill: '#000' }).setOrigin(0.5).setScrollFactor(0).setDepth(btnDepth).setAlpha(0.6);

        // Right button
        g.fillCircle(180, 520, 36);
        const rightZone = this.add.zone(180, 520, 72, 72).setScrollFactor(0).setDepth(btnDepth).setInteractive();
        this.add.text(180, 520, '\u25B6', { fontSize: '28px', fill: '#000' }).setOrigin(0.5).setScrollFactor(0).setDepth(btnDepth).setAlpha(0.6);

        // Jump button (up)
        g.fillStyle(0x88ff88);
        g.fillCircle(700, 480, 40);
        const jumpZone = this.add.zone(700, 480, 80, 80).setScrollFactor(0).setDepth(btnDepth).setInteractive();
        this.add.text(700, 480, '\u25B2', { fontSize: '32px', fill: '#000' }).setOrigin(0.5).setScrollFactor(0).setDepth(btnDepth).setAlpha(0.6);

        // Down button (enter car)
        g.fillStyle(0x88aaff);
        g.fillCircle(700, 560, 28);
        const downZone = this.add.zone(700, 560, 56, 56).setScrollFactor(0).setDepth(btnDepth).setInteractive();
        this.add.text(700, 560, '\u25BC', { fontSize: '22px', fill: '#000' }).setOrigin(0.5).setScrollFactor(0).setDepth(btnDepth).setAlpha(0.6);

        // Bomb button
        g.fillStyle(0xff6644);
        g.fillCircle(600, 530, 30);
        const bombZone = this.add.zone(600, 530, 60, 60).setScrollFactor(0).setDepth(btnDepth).setInteractive();
        this.add.text(600, 530, '\uD83D\uDCA3', { fontSize: '24px' }).setOrigin(0.5).setScrollFactor(0).setDepth(btnDepth).setAlpha(0.7);

        // Wire up touch events
        const wire = (zone, key) => {
            zone.on('pointerdown', () => { this.touchInput[key] = true; });
            zone.on('pointerup', () => { this.touchInput[key] = false; });
            zone.on('pointerout', () => { this.touchInput[key] = false; });
        };
        wire(leftZone, 'left');
        wire(rightZone, 'right');
        wire(jumpZone, 'up');
        wire(downZone, 'down');
        wire(bombZone, 'space');

        // Enable multi-touch
        this.input.addPointer(2);
    }

    isDown(key) {
        return this.cursors[key].isDown || this.touchInput[key];
    }

    updateUI() {
        const bombText = this.bombCount > 0 ? ` | Bombs: ${this.bombCount} (SPACE)` : '';
        this.uiText.setText(`Arrows: move/jump | Down: enter car | Up: exit car${bombText}`);
        const princessHearts = '\u2764'.repeat(this.princessLives) + '\u2661'.repeat(3 - this.princessLives);
        const kingHearts = '\u2764'.repeat(this.kingLives) + '\u2661'.repeat(3 - this.kingLives);
        this.princessLivesText.setText(`Princess ${princessHearts}`);
        this.kingLivesText.setText(`Prince ${kingHearts}`);
    }

    update(time, delta) {
        if (this.gameOver) {
            if (Phaser.Input.Keyboard.JustDown(this.spaceKey) || this.touchInput.space) {
                this.touchInput.space = false;
                this.scene.restart();
            }
            return;
        }

        // Check death: falling off the world
        if (this.princess.y > 700 && !this.respawning) {
            this.princessLives--;
            this.updateUI();
            if (this.princessLives <= 0) {
                this.triggerGameOver('The princess lost all lives!');
                return;
            }
            this.respawnPrincess();
        }
        if (this.king.y > 700 && !this.respawning) {
            this.kingLives--;
            this.updateUI();
            if (this.kingLives <= 0) {
                this.triggerGameOver('The prince lost all lives!');
                return;
            }
            this.respawnKing();
        }

        // Use bomb (keyboard or touch)
        const bombTouchJust = this.touchInput.space && !this._lastBombTouch;
        this._lastBombTouch = this.touchInput.space;
        if ((Phaser.Input.Keyboard.JustDown(this.spaceKey) || bombTouchJust) && this.bombCount > 0 && !this.inCar) {
            this.useBomb();
        }

        // Handle enter/exit car
        if (time > this.enterCarCooldown) {
            if (this.inCar && this.isDown('up')) {
                this.exitCar();
                this.enterCarCooldown = time + 500;
            } else if (!this.inCar && this.isDown('down') && this.onTopOfCar) {
                this.enterCar(this.onTopOfCar);
                this.enterCarCooldown = time + 500;
            }
        }

        // Reset collision flags for next frame
        this.nearCar = null;
        this.onTopOfCar = null;

        if (this.inCar) {
            this.updateDriving(time);
        } else {
            this.updateWalking(time);
        }

        this.updateKing();
        this.updateAmbulance(time);
        this.updatePawPatrol(time);
        this.checkCastle();
    }

    triggerGameOver(reason) {
        this.gameOver = true;
        this.gameOverText.setVisible(true);
        const restartHint = this.isMobile ? 'Tap bomb button to restart' : 'Press SPACE to restart';
        this.restartText.setText(`${reason}\n${restartHint}`);
        this.restartText.setVisible(true);
        this.princess.setVelocity(0, 0);
        this.princess.body.enable = false;
        this.king.setVelocity(0, 0);
        this.king.body.enable = false;
        if (this.currentCar) {
            this.currentCar.setVelocityX(0);
        }
    }

    respawnPrincess() {
        this.respawning = true;
        if (this.inCar) {
            this.exitCar();
        }
        // Respawn near the king or at start
        const respawnX = this.king.y < 700 ? this.king.x - 40 : 100;
        this.princess.setPosition(respawnX, 400);
        this.princess.setVelocity(0, 0);
        this.princess.setAlpha(0.5);
        this.time.delayedCall(1500, () => {
            this.princess.setAlpha(1);
            this.respawning = false;
        });
    }

    respawnKing() {
        this.respawning = true;
        // Respawn near the princess
        const respawnX = this.princess.y < 700 ? this.princess.x - 40 : 100;
        this.king.setPosition(respawnX, 400);
        this.king.setVelocity(0, 0);
        this.king.setAlpha(0.5);
        this.time.delayedCall(1500, () => {
            this.king.setAlpha(1);
            this.respawning = false;
        });
    }

    useBomb() {
        this.bombCount--;
        this.updateUI();

        const px = this.princess.x;
        const py = this.princess.y;
        const explosionRadius = TILE * 4;

        // Visual explosion
        const exp = this.add.image(px, py, 'explosion');
        exp.setScale(3);
        exp.setAlpha(0.9);
        exp.setDepth(15);
        this.tweens.add({
            targets: exp,
            alpha: 0,
            scale: 5,
            duration: 500,
            onComplete: () => exp.destroy(),
        });

        // Camera shake
        this.cameras.main.shake(300, 0.01);

        // Destroy platform tiles in radius (all directions)
        for (let i = this.platformTiles.length - 1; i >= 0; i--) {
            const tile = this.platformTiles[i];
            if (!tile.active) continue;
            const dist = Phaser.Math.Distance.Between(px, py, tile.x, tile.y);
            if (dist <= explosionRadius) {
                // Small explosion particle at tile position
                const tileExp = this.add.image(tile.x, tile.y, 'explosion');
                tileExp.setScale(1);
                tileExp.setDepth(15);
                this.tweens.add({
                    targets: tileExp,
                    alpha: 0,
                    scale: 1.5,
                    duration: 400,
                    onComplete: () => tileExp.destroy(),
                });
                tile.destroy();
                this.platformTiles.splice(i, 1);
            }
        }
    }

    enterCar(car) {
        this.inCar = true;
        this.currentCar = car;
        this.princess.setVisible(false);
        this.princess.body.enable = false;
        this.cameras.main.startFollow(car, true, 0.1, 0.1);
        this.autoWalk = false;
        car.setTint(0xddddff);

        // Siren for 1 second on entry
        this.sirenActive = true;
        this.time.delayedCall(1000, () => {
            this.sirenActive = false;
        });
    }

    exitCar() {
        this.inCar = false;
        this.princess.setVisible(true);
        this.princess.body.enable = true;
        this.princess.setPosition(this.currentCar.x, this.currentCar.y - 60);
        this.princess.setVelocity(0, 0);
        this.currentCar.setVelocityX(0);
        this.currentCar.clearTint();
        this.cameras.main.startFollow(this.princess, true, 0.1, 0.1);
        this.currentCar = null;
    }

    updateKing() {
        // King follows the princess (or the car if she's driving)
        const target = this.inCar ? this.currentCar : this.princess;
        const dx = target.x - this.king.x;
        const dist = Math.abs(dx);
        const kingOnGround = this.king.body.touching.down;
        const kingSpeed = this.inCar ? CAR_SPEED * 0.8 : WALK_SPEED * 0.7;

        if (dist > 80) {
            // Walk toward princess
            if (dx > 0) {
                this.king.setVelocityX(kingSpeed);
                this.king.setFlipX(false);
            } else {
                this.king.setVelocityX(-kingSpeed);
                this.king.setFlipX(true);
            }

            // Jump if princess is above and king is on the ground
            if (target.y < this.king.y - 60 && kingOnGround) {
                this.king.setVelocityY(JUMP_SPEED);
            }

            if (kingOnGround) {
                this.king.play('king_walk', true);
            } else {
                this.king.stop();
                this.king.setTexture('king');
            }
        } else {
            // Close enough, stop
            this.king.setVelocityX(0);
            this.king.stop();
            this.king.setTexture('king');
            // Face the princess
            this.king.setFlipX(dx < 0);
        }
    }

    updateAmbulance(time) {
        if (this.castleReached) return;

        // Check if king is close to an ambulance and should auto-enter
        if (!this.kingInAmbulance) {
            const kingX = this.king.x;
            const kingY = this.king.y;
            this.ambulances.children.iterate((amb) => {
                if (!amb || !amb.active || this.kingInAmbulance) return;
                const dist = Phaser.Math.Distance.Between(kingX, kingY, amb.x, amb.y);
                if (dist < 80 && this.king.body.touching.down) {
                    // King jumps into ambulance
                    this.kingInAmbulance = true;
                    this.currentAmbulance = amb;
                    this.king.setVisible(false);
                    this.king.body.enable = false;
                    amb.setTint(0xffdddd);
                }
            });
        }

        // Ambulance follows police car / princess when king is inside
        if (this.kingInAmbulance && this.currentAmbulance) {
            const amb = this.currentAmbulance;
            const target = this.inCar ? this.currentCar : this.princess;
            const dx = target.x - amb.x;
            const followDist = 120;

            if (Math.abs(dx) > followDist) {
                const speed = this.inCar ? CAR_SPEED * 0.85 : WALK_SPEED * 1.2;
                amb.setVelocityX(dx > 0 ? speed : -speed);
                amb.setFlipX(dx < 0);
            } else {
                amb.setVelocityX(amb.body.velocity.x * 0.9);
            }

            // Flash lights periodically
            if (Math.floor(time / 200) % 2 === 0) {
                amb.setTint(0xffdddd);
            } else {
                amb.setTint(0xddddff);
            }

            // King exits if princess stops for a while and is close
            // (King stays in ambulance for the ride)
        }
    }

    updatePawPatrol(time) {
        if (this.castleReached) return;

        for (const paw of this.pawPatrolChars) {
            // Hover movement
            paw.x = paw.baseX + Math.sin(time / 1500 + paw.baseX) * 60;
            paw.y = paw.baseY + Math.cos(time / 1200 + paw.baseX) * 20;

            // Fire balls at princess if she's nearby
            const distToPrincess = Math.abs(this.princess.x - paw.x);
            if (distToPrincess < 500 && time > paw.lastFire + paw.fireInterval) {
                paw.lastFire = time;
                const ball = this.pawBalls.create(paw.x, paw.y + 20, 'paw_ball');
                ball.body.setGravityY(200);
                // Aim toward princess
                const angle = Phaser.Math.Angle.Between(paw.x, paw.y, this.princess.x, this.princess.y);
                const speed = 200;
                ball.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
                ball.body.setSize(12, 12);
                // Auto-destroy after 4 seconds
                this.time.delayedCall(4000, () => {
                    if (ball.active) ball.destroy();
                });
            }
        }
    }

    checkCastle() {
        if (this.castleReached) return;

        const princessNearCastle = Math.abs(this.princess.x - this.castle.x) < 120;
        const kingNearCastle = this.kingInAmbulance
            ? Math.abs(this.currentAmbulance.x - this.castle.x) < 150
            : Math.abs(this.king.x - this.castle.x) < 150;

        if (princessNearCastle && kingNearCastle) {
            this.castleReached = true;

            // Exit vehicles
            if (this.inCar) this.exitCar();
            if (this.kingInAmbulance) {
                this.king.setVisible(true);
                this.king.body.enable = true;
                this.king.setPosition(this.currentAmbulance.x, this.currentAmbulance.y - 40);
                this.currentAmbulance.clearTint();
                this.currentAmbulance.setVelocityX(0);
                this.kingInAmbulance = false;
                this.currentAmbulance = null;
            }

            // Position them at the castle gate
            this.princess.setVelocity(0, 0);
            this.king.setVelocity(0, 0);
            this.princess.setPosition(this.castle.x - 20, 440);
            this.king.setPosition(this.castle.x + 20, 440);

            // Face each other
            this.princess.setFlipX(false);
            this.king.setFlipX(true);

            // Dance animation - they bob and spin
            this.tweens.add({
                targets: this.princess,
                y: 430,
                duration: 400,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut',
            });
            this.tweens.add({
                targets: this.king,
                y: 430,
                duration: 400,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut',
                delay: 200,
            });
            // Sway left-right
            this.tweens.add({
                targets: this.princess,
                x: this.castle.x - 30,
                duration: 800,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut',
            });
            this.tweens.add({
                targets: this.king,
                x: this.castle.x + 30,
                duration: 800,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut',
            });

            // Victory text
            this.cameras.main.startFollow(this.castle, true, 0.1, 0.1);
            const winText = this.add.text(400, 200, '🏰 They reached the castle! 💃🕺', {
                fontSize: '32px',
                fill: '#ffd700',
                fontStyle: 'bold',
                stroke: '#000',
                strokeThickness: 4,
            });
            winText.setOrigin(0.5);
            winText.setScrollFactor(0);
            winText.setDepth(20);

            const subText = this.add.text(400, 260, 'The princess and prince dance happily ever after!', {
                fontSize: '18px',
                fill: '#fff',
                stroke: '#000',
                strokeThickness: 3,
            });
            subText.setOrigin(0.5);
            subText.setScrollFactor(0);
            subText.setDepth(20);

            // Stop paw patrol
            for (const paw of this.pawPatrolChars) {
                paw.setVisible(false);
            }
        }
    }

    updateDriving(time) {
        const car = this.currentCar;
        if (this.isDown('left')) {
            car.setVelocityX(-CAR_SPEED);
            car.setFlipX(true);
        } else if (this.isDown('right')) {
            car.setVelocityX(CAR_SPEED);
            car.setFlipX(false);
        } else {
            car.setVelocityX(car.body.velocity.x * 0.95); // friction
        }

        // Siren flash effect (only during siren activation)
        if (this.sirenActive) {
            if (Math.floor(time / 100) % 2 === 0) {
                car.setTint(0xff0000);
            } else {
                car.setTint(0x0066ff);
            }
        } else {
            car.setTint(0xddddff);
        }
    }

    updateWalking(time) {
        const onGround = this.princess.body.touching.down;
        let moving = false;

        if (this.isDown('left')) {
            this.princess.setVelocityX(-WALK_SPEED);
            this.facingRight = false;
            this.autoWalk = false;
            moving = true;
        } else if (this.isDown('right')) {
            this.princess.setVelocityX(WALK_SPEED);
            this.facingRight = true;
            this.autoWalk = false;
            moving = true;
        } else if (this.autoWalk) {
            this.princess.setVelocityX(WALK_SPEED * 0.6);
            this.facingRight = true;
            moving = true;
        } else {
            this.princess.setVelocityX(0);
        }

        if (this.isDown('up') && onGround) {
            this.princess.setVelocityY(JUMP_SPEED);
        }

        this.princess.setFlipX(!this.facingRight);

        if (moving && onGround) {
            this.princess.play('walk', true);
        } else {
            this.princess.stop();
            this.princess.setTexture('princess');
        }

        // Re-enable auto-walk when no keys pressed for a bit
        if (!this.isDown('left') && !this.isDown('right')) {
            if (!this.autoWalkTimer) {
                this.autoWalkTimer = time;
            } else if (time - this.autoWalkTimer > 2000) {
                this.autoWalk = true;
                this.autoWalkTimer = null;
            }
        } else {
            this.autoWalkTimer = null;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#87ceeb',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    input: {
        activePointers: 4,
        touch: true,
    },
    scene: GameScene,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

new Phaser.Game(config);
