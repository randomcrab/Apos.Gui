﻿using Microsoft.Xna.Framework;
using Optional;

namespace Apos.Gui {
    /// <summary>
    /// Goal: Adds padding around a component.
    /// </summary>
    public class Border : Component {

        // Group: Constructors

        public Border() : this(new Component()) { }
        public Border(Component c) : this(c, 0, 0, 0, 0) { }
        public Border(Component c, int iMarginLeft, int iMarginTop, int iMarginRight, int iMarginBottom) {
            Item = c;
            MarginLeft = iMarginLeft;
            MarginTop = iMarginTop;
            MarginRight = iMarginRight;
            MarginBottom = iMarginBottom;
        }

        // Group: Public Variables

        public virtual Component Item {
            get => _item;
            set {
                _item = value;
                _item.Parent = Option.Some((Component)this);
            }
        }
        public override int PrefWidth => Item.PrefWidth + MarginLeft + MarginRight;
        public override int PrefHeight => Item.PrefHeight + MarginTop + MarginBottom;
        public virtual int MarginLeft {
            get => _marginLeft;
            set {
                _marginLeft = value;
            }
        }
        public virtual int MarginTop {
            get => _marginTop;
            set {
                _marginTop = value;
            }
        }
        public virtual int MarginRight {
            get => _marginRight;
            set {
                _marginRight = value;
            }
        }
        public virtual int MarginBottom {
            get => _marginBottom;
            set {
                _marginBottom = value;
            }
        }
        public override bool OldIsHovered {
            get => base.OldIsHovered;
            set {
                base.OldIsHovered = value;
                Item.OldIsHovered = value;
            }
        }
        public override bool IsHovered {
            get => base.IsHovered;
            set {
                base.IsHovered = value;
                Item.IsHovered = value;
            }
        }
        public override bool HasFocus {
            get => base.HasFocus;
            set {
                base.HasFocus = value;
                Item.HasFocus = value;
            }
        }
        public override bool IsFocusable => Item.IsFocusable;

        // Group: Public Functions

        public override Component GetFinal() {
            return Item;
        }
        public override Component GetFinalInverse() {
            return Item;
        }
        public override void UpdateSetup() {
            base.UpdateSetup();

            _topLeftOffset = new Point(MarginLeft, MarginTop);
            Item.Width = Width - MarginLeft - MarginRight;
            Item.Height = Height - MarginTop - MarginBottom;
            Item.Position = Position + _topLeftOffset;
            Item.ClippingRect = ClipRectangle(Item.BoundingRect);

            Item.UpdateSetup();
        }
        public override bool UpdateInput() {
            bool isUsed = base.UpdateInput();

            isUsed = isUsed || Item.UpdateInput();

            return isUsed;
        }
        public override void Update() {
            Item.Update();
        }
        public override void Draw() {
            Item.Draw();
        }

        // Group: Private Variables

        protected Component _item;
        protected int _marginLeft;
        protected int _marginTop;
        protected int _marginRight;
        protected int _marginBottom;
        protected Point _topLeftOffset;
    }
}