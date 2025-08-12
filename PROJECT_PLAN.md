### **Projekt Terv: Supreme Clone Weboldal**

Ez a dokumentum a weboldal fejlesztésének állapotát és a hátralévő feladatokat követi nyomon.

#### **Általános Cél**
Egy funkcionális, a Supreme weboldalához hasonló e-kereskedelmi oldal létrehozása React, TailwindCSS és Supabase segítségével.

---

### **Feladatok Állapota**

#### **✅ Befejezett feladatok**

*   **Projekt alapok:** Vite + React projekt inicializálva.
*   **Backend:** Supabase projekt összekötve, kliens (`supabaseClient.js`) beállítva.
*   **Authentikáció:**
    *   Email/jelszavas regisztráció és bejelentkezés egy oldalon (`AuthPage.jsx`).
    *   Google authentikáció integrálva a bejelentkezési oldalon.
*   **Felhasználói felület (UI):**
    *   Dinamikus Header, ami a bejelentkezési állapotot mutatja (Bejelentkezés / Profil menü).
    *   Bejelentkezett felhasználóknak profil ikon lenyíló menüvel (Profilom, Rendeléseim, Beállítások, Kijelentkezés).

#### **▶️ Következő lépés / Folyamatban**

*   **Shop oldal (`Shop.jsx`):** Termékek listázása a Supabase adatbázisból.

#### **📋 Hátralévő feladatok (Backlog)**

*   **Adatbázis:**
    *   `products` tábla létrehozása és feltöltése termékekkel.
    *   `profiles` tábla a felhasználói adatoknak (pl. név, cím).
    *   `orders` és `order_items` táblák a rendelések kezeléséhez.
*   **Shop Funkcionalitás:**
    *   Termék részletező oldal.
    *   Kosár funkció (termékek hozzáadása, törlése, mennyiség módosítása).
    *   Vásárlási folyamat (cím megadása, fizetés - egyelőre lehet szimulált).
*   **Felhasználói Fiók:**
    *   **Profil (`Profile.jsx`):** Felhasználói adatok megtekintése és szerkesztése.
    *   **Rendelések (`Orders.jsx`):** Korábbi rendelések listázása.
    *   **Beállítások (`Settings.jsx`):** Fiókbeállítások (pl. jelszóváltoztatás).
*   **Egyéb oldalak:**
    *   **Kapcsolat (`Contact.jsx`):** Kapcsolati űrlap implementálása (az üzeneteket menthetjük Supabase-be).
*   **UI/UX Finomítások:**
    *   Reszponzív design tökéletesítése.
    *   Töltési állapotok és visszajelzések (pl. "toast" üzenetek) a felhasználói interakcióknál.
    *   Az oldal stílusának további finomítása, hogy jobban hasonlítson az eredeti Supreme oldalra.
