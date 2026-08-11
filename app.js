// ================================
// KOINΤROL - PRIMERA VERSIÓN
// ================================

// Datos temporales del usuario.
// Más adelante estos datos estarán en Supabase.

let usuario = {
    nombre: "Juan",

    gastosFijos: 120,
    ahorro: 250,
    inversion: 180,

    porcentajes: {
        ahorro: 40,
        inversion: 20,
        personal: 40
    }
};


// =================================
// ACTUALIZAR PANTALLA
// =================================

function actualizarPantalla() {

    document.getElementById("fixedBalance").textContent =
        formatearEuros(usuario.gastosFijos);

    document.getElementById("savingBalance").textContent =
        formatearEuros(usuario.ahorro);

    document.getElementById("investmentBalance").textContent =
        formatearEuros(usuario.inversion);

    actualizarPatrimonio();
}


// =================================
// PATRIMONIO
// =================================

function actualizarPatrimonio() {

    const patrimonio =
        usuario.ahorro + usuario.inversion;

    document.getElementById("patrimonyBalance").textContent =
        formatearEuros(patrimonio);
}


// =================================
// FORMATO DE DINERO
// =================================

function formatearEuros(valor) {

    return valor.toLocaleString("es-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + " €";
}


// =================================
// RECIBÍ DINERO
// =================================

function receiveMoney() {

    const cantidad = prompt(
        "💰 ¿Cuánto dinero recibiste?"
    );

    if (cantidad === null) {
        return;
    }

    const dinero = parseFloat(
        cantidad.replace(",", ".")
    );

    if (isNaN(dinero) || dinero <= 0) {

        alert("Introduce una cantidad válida.");

        return;
    }

    alert(
        "💰 Recibiste " +
        formatearEuros(dinero) +
        ".\n\n" +
        "En la siguiente versión Kointrol te preguntará " +
        "qué tipo de dinero recibiste y hará la distribución."
    );
}


// =================================
// REGISTRAR GASTO
// =================================

function registerExpense() {

    const cantidad = prompt(
        "💸 ¿Cuánto gastaste?"
    );

    if (cantidad === null) {
        return;
    }

    const gasto = parseFloat(
        cantidad.replace(",", ".")
    );

    if (isNaN(gasto) || gasto <= 0) {

        alert("Introduce una cantidad válida.");

        return;
    }

    alert(
        "💸 Gasto registrado: " +
        formatearEuros(gasto) +
        "\n\n" +
        "Kointrol te preguntará siempre " +
        "de qué cartera debe salir."
    );
}


// =================================
// AÑADIR AHORRO
// =================================

function addSaving() {

    const cantidad = prompt(
        "🏦 ¿Cuánto quieres añadir a ahorro?"
    );

    if (cantidad === null) {
        return;
    }

    const dinero = parseFloat(
        cantidad.replace(",", ".")
    );

    if (isNaN(dinero) || dinero <= 0) {

        alert("Introduce una cantidad válida.");

        return;
    }

    usuario.ahorro += dinero;

    actualizarPantalla();

    alert(
        "🏦 Has añadido " +
        formatearEuros(dinero) +
        " a Ahorro."
    );
}


// =================================
// AÑADIR INVERSIÓN
// =================================

function addInvestment() {

    const cantidad = prompt(
        "📈 ¿Cuánto quieres añadir a inversión?"
    );

    if (cantidad === null) {
        return;
    }

    const dinero = parseFloat(
        cantidad.replace(",", ".")
    );

    if (isNaN(dinero) || dinero <= 0) {

        alert("Introduce una cantidad válida.");

        return;
    }

    usuario.inversion += dinero;

    actualizarPantalla();

    alert(
        "📈 Has añadido " +
        formatearEuros(dinero) +
        " a Inversión."
    );
}


// =================================
// DISTRIBUCIÓN
// =================================

function showDistribution() {

    const porcentajes = usuario.porcentajes;

    alert(
        "📊 Tu distribución actual:\n\n" +

        "🏦 Ahorro: " +
        porcentajes.ahorro +
        "%\n\n" +

        "📈 Inversión: " +
        porcentajes.inversion +
        "%\n\n" +

        "👛 Personal: " +
        porcentajes.personal +
        "%"
    );
}


// =================================
// METAS
// =================================

function showGoals() {

    alert(
        "🎯 MIS METAS\n\n" +

        "Aquí podrás consultar cuánto tiempo " +
        "necesitarías para conseguir algo " +
        "basándonos en tu ahorro mensual."
    );
}


// =================================
// MEDALLAS
// =================================

function showBadges() {

    alert(
        "🏅 MIS MEDALLAS\n\n" +

        "🏦 Ahorro\n" +
        "🥉 50 €\n" +
        "🥈 100 €\n" +
        "🥇 250 €\n" +
        "💎 500 €\n" +
        "🏆 1.000 €\n\n" +

        "📈 Inversión\n" +
        "🥉 50 €\n" +
        "🥈 100 €\n" +
        "🥇 250 €\n" +
        "💎 500 €\n" +
        "🏆 1.000 €"
    );
}


// =================================
// INICIAR
// =================================

actualizarPantalla();
