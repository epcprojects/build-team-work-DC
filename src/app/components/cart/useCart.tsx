"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import CartOffCanvas from "./CartOffCanvas";

export interface CartItem {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
}

const CART_STORAGE_KEY = "cyberSafetyCart";

const readCartFromStorage = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
};

const writeCartToStorage = (items: CartItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
const [items, setItems] = useState<CartItem[]>(readCartFromStorage);
const [isCartOpen, setIsCartOpen] = useState(false);

//   useEffect(() => {
//     setItems(readCartFromStorage());
//   }, []);

  const setAndPersist = useCallback((updater: (prev: CartItem[]) => CartItem[]) => {
    setItems((prev) => {
      const next = updater(prev);
      writeCartToStorage(next);
      return next;
    });
  }, []);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">, quantity = 1) => {
      const safeQuantity = Math.max(1, quantity);
      setAndPersist((prev) => {
        const existing = prev.find((x) => x.id === item.id);
        if (!existing) {
          return [...prev, { ...item, quantity: safeQuantity }];
        }
        return prev.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + safeQuantity } : x
        );
      });
    },
    [setAndPersist]
  );

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      const safeQuantity = Math.max(1, quantity);
      setAndPersist((prev) =>
        prev.map((x) => (x.id === id ? { ...x, quantity: safeQuantity } : x))
      );
    },
    [setAndPersist]
  );

  const removeItem = useCallback(
    (id: string) => {
      setAndPersist((prev) => prev.filter((x) => x.id !== id));
    },
    [setAndPersist]
  );

  const clearCart = useCallback(() => {
    setAndPersist(() => []);
  }, [setAndPersist]);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [items]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      isCartOpen,
      openCart,
      closeCart,
    }),
    [
      items,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      isCartOpen,
      openCart,
      closeCart,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartOffCanvas
        isOpen={isCartOpen}
        onClose={closeCart}
        items={items}
        subtotal={subtotal}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={() => {
          closeCart();
          router.push("/payment");
        }}
      />
    </CartContext.Provider>
  );
};
