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

class GameScene extends Phaser.Scene {
    constructor() {
        super('game');
    }

    create() {
        // Generate textures
        createPrincessTexture(this);
        createWalkTexture(this);
        createGroundTextures(this);
        createCloudTexture(this);
        createFlowerTexture(this);
        createPoliceCarTexture(this);
        createKingTexture(this);
        createKingWalkTexture(this);

        // Sky gradient background
        this.cameras.main.setBackgroundColor('#87ceeb');

        // Build the world - a long ground platform
        this.groundGroup = this.physics.add.staticGroup();

        const worldWidth = 6400;

        // Ground: grass on top, dirt below
        for (let x = 0; x < worldWidth; x += TILE) {
            this.groundGroup.create(x + TILE / 2, 568, 'grass');
            this.groundGroup.create(x + TILE / 2, 600, 'dirt');
        }

        // Some platforms (lower, reachable with jump)
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
                this.groundGroup.create(p.x + i * TILE + TILE / 2, p.y, 'grass');
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

        // Police cars - placed on flat ground, away from platforms
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

        // Driving state
        this.inCar = false;
        this.currentCar = null;

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
        this.physics.add.collider(this.king, this.policeCars);

        // Collision
        this.physics.add.collider(this.princess, this.groundGroup);

        // Collide with police cars - landing on top enters the car
        this.physics.add.collider(this.princess, this.policeCars, (princess, car) => {
            if (princess.body.touching.down && car.body.touching.up) {
                this.landedOnCar = car;
            }
            this.nearCar = car;
        });

        // Enter/exit car cooldown
        this.enterCarCooldown = 0;
        this.landedOnCar = null;

        // Camera
        this.cameras.main.startFollow(this.princess, true, 0.1, 0.1);
        this.cameras.main.setDeadzone(100, 50);
        this.physics.world.setBounds(0, 0, worldWidth, 620);

        // Controls
        this.cursors = this.input.keyboard.createCursorKeys();
        this.facingRight = true;
        this.autoWalk = true;

        // UI text
        this.uiText = this.add.text(16, 16, 'Arrows: move/jump | Down: enter/exit police car', {
            fontSize: '16px',
            fill: '#fff',
            backgroundColor: '#00000066',
            padding: { x: 8, y: 4 },
        });
        this.uiText.setScrollFactor(0);
        this.uiText.setDepth(10);

        // Walking frame timer
        this.walkTimer = 0;
    }

    update(time, delta) {
        // Handle enter/exit car (using flags set by collider in previous frame)
        if (this.cursors.down.isDown && time > this.enterCarCooldown) {
            if (this.inCar) {
                this.exitCar();
                this.enterCarCooldown = time + 500;
            } else if (this.nearCar) {
                this.enterCar(this.nearCar);
                this.enterCarCooldown = time + 500;
            }
        }

        // Jump onto car = enter it
        if (this.landedOnCar && !this.inCar && time > this.enterCarCooldown) {
            this.enterCar(this.landedOnCar);
            this.enterCarCooldown = time + 500;
        }

        // Reset collision flags for next frame
        this.nearCar = null;
        this.landedOnCar = null;

        if (this.inCar) {
            this.updateDriving(time);
        } else {
            this.updateWalking(time);
        }

        this.updateKing();
    }

    enterCar(car) {
        this.inCar = true;
        this.currentCar = car;
        this.princess.setVisible(false);
        this.princess.body.enable = false;
        this.cameras.main.startFollow(car, true, 0.1, 0.1);
        this.autoWalk = false;
        car.setTint(0xddddff);
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
        const kingSpeed = WALK_SPEED * 0.7;

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

    updateDriving(time) {
        const car = this.currentCar;
        if (this.cursors.left.isDown) {
            car.setVelocityX(-CAR_SPEED);
            car.setFlipX(true);
        } else if (this.cursors.right.isDown) {
            car.setVelocityX(CAR_SPEED);
            car.setFlipX(false);
        } else {
            car.setVelocityX(car.body.velocity.x * 0.95); // friction
        }

        // Siren flash effect
        if (Math.floor(time / 200) % 2 === 0) {
            car.setTint(0xffaaaa);
        } else {
            car.setTint(0xaaaaff);
        }
    }

    updateWalking(time) {
        const onGround = this.princess.body.touching.down;
        let moving = false;

        if (this.cursors.left.isDown) {
            this.princess.setVelocityX(-WALK_SPEED);
            this.facingRight = false;
            this.autoWalk = false;
            moving = true;
        } else if (this.cursors.right.isDown) {
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

        if (this.cursors.up.isDown && onGround) {
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
        if (!this.cursors.left.isDown && !this.cursors.right.isDown) {
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
    scene: GameScene,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

new Phaser.Game(config);
